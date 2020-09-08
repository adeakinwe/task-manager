importScripts('./ngsw-worker.js');

self.addEventListener('sync', (event) => {
  if(event.tag === 'post-data'){
    event.waitUntil(addData())
  }
})

function addData(){
  let obj = {
    quote: 'Trust your instincts!'
  };
  fetch('http://localhost:4000/data', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  }).then(() => Promise.resolve())
    .catch(() => Promise.reject());
}
