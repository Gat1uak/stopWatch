let timer = document.getElementById('clock');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

watch = new StopWatch();

start.addEventListener('click', function () {
   if (!watch.isOn) {
      watch.start();
   }
})

stop.addEventListener('click', function () {
   if (watch.isOn) {
      watch.stop();
   };
})

reset.addEventListener('click', function () {
   watch.reset();
})
