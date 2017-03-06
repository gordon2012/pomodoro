require('file-loader?name=[name].[ext]!./index.html');
require('./style.css');

var state = 'stopped';
var activityTimer = 15;
var breakTimer = 5;
var counter = activityTimer;
var interval = null;

var clock = document.querySelector('.clock');
var btn = document.querySelector('.activate');

btn.addEventListener('click', start);
display(counter);


function display(time) {
  var min = Math.floor(time / 60).toString();
  var sec = (time % 60).toString();

  var m = min.length == 1 ? '0' + min : min;
  var s = sec.length == 1 ? '0' + sec : sec;

  clock.innerHTML = m + ':' + s;
}

function start() {
  state = 'activity';
  btn.innerHTML = 'Pause';

  counter = activityTimer;
  display(counter);

  interval = setInterval(tick, 1000);

  btn.removeEventListener('click', start);
  btn.addEventListener('click', pause);
}

function pause() {
  if(state == 'paused') {
    state = 'activity';
    btn.innerHTML = 'Pause';
    interval = setInterval(tick, 1000);
  } else {
    state = 'paused';
    btn.innerHTML = 'Resume';
    clearInterval(interval);
  }
}

function tick() {
  counter--;
  if(counter < 0) {
    if(state == 'activity') {
      counter = breakTimer;
      state = 'break';
    } else if(state == 'break') {
      counter = activityTimer;
      state = 'activity';
    }
  }

  display(counter);
}
