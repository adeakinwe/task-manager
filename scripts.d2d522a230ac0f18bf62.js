function addTask(t){fetch("http://localhost:4000/data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({task:t})}).then(()=>Promise.resolve()).catch(()=>Promise.reject())}function getAndSendTask(){let t;const e=indexedDB.open("my-db");e.onerror=t=>{console.log("using Indexed DB")},e.onsuccess=e=>{t=e.target.result,getTask(t)}}function getTask(t){const e=t.transaction(["task-store"]).objStore("task-store").get("task");e.onerror=t=>{},e.onsuccess=t=>{addTask(e.result),console.log("Recommended task is "+e.result)}}importScripts("./ngsw-worker.js"),self.addEventListener("sync",t=>{"post-data"===t.tag&&t.waitUntil(getAndSendTask())});