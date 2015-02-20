function Clock () {

}

Clock.TICK = 5000;

Clock.prototype.printTime = function (time) {
  // Format the time in HH:MM:SS
  console.log(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds())
};

Clock.prototype.run = function () {
  var time = new Date()
  var that = this
  // 1. Set the currentTime.
  this.printTime(time)
  // 2. Call printTime.

  setInterval(function(){that._tick(time)}, 5000)
  // 3. Schedule the tick interval.
};

Clock.prototype._tick = function (time) {
  // 1. Increment the currentTime.
  time.setSeconds(time.getSeconds() + 5)
  this.printTime(time)

  // 2. Call printTime.
};

var clock = new Clock();
clock.run();
