console.log('Connection made');

function StopWatch() {

   let time = 0;
   let interval;
   let offset;

   function update() {
      if (this.isOn) {
         time += delta();
      }
      let formattedTime = timeFormatter(time);
      document.getElementById('clock').innerHTML = formattedTime;
      console.log(formattedTime);
   };
   function delta() {
      let now = Date.now();
      let timePassed = now - offset;
      offset = now;
      return timePassed;
   };
   function timeFormatter(timeInMiliseconds) {
      let time = new Date(timeInMiliseconds);
      let minutes = time.getMinutes().toString();
      let seconds = time.getSeconds().toString();
      let milliseconds = time.getMilliseconds().toString();

      if (minutes.length < 2) {
         minutes = '0' + minutes;
      }

      if (seconds.length < 2) {
         seconds = '0' + seconds;
      }

      if (milliseconds.length < 2) {
         milliseconds = '0' + milliseconds;
      }

      return `${minutes}:${seconds}:${milliseconds}`;
   };

   this.isOn = false;
   this.start = function () {
      if (!this.isOn) {
         interval = setInterval(update.bind(this), 10);
         offset = Date.now();
         this.isOn = true
      };
   }
   this.stop = function () {
      if (this.isOn) {
         clearInterval(interval);
         interval = null;
         this.isOn = false;
      }
   }
   this.reset = function () {
      if (!this.isOn) {
         time = 0;
         update();
      }
   }
}