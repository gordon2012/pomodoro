require('file-loader?name=[name].[ext]!./index.html');
require('./style.css');

var state = 'stopped';

var activityTimer = 30;
var breakTimer = 5;

var counter = 0;
var interval = null;

var h2 = document.querySelector('.countdown');
var btn = document.querySelector('.activate');

btn.addEventListener('click', setup);


function display(time) {
  var min = Math.floor(time / 60).toString();
  var sec = (time % 60).toString();

  var m = min.length == 1 ? '0' + min : min;
  var s = sec.length == 1 ? '0' + sec : sec;

  return m + ':' + s;
}

function setup() {
  console.log('SETUP');
  state = 'activity';
  btn.innerHTML = 'Pause';

  counter = activityTimer;
  interval = setInterval(tick, 1000);

  btn.removeEventListener('click', setup);
  btn.addEventListener('click', pause);
}

function pause() {
  if(state == 'paused') {
    console.log('RESUMING');
    state = 'activity';
    btn.innerHTML = 'Resume';
    interval = setInterval(tick, 1000);
  } else {
    console.log('PAUSING');
    state = 'paused';
    btn.innerHTML = 'Resume';
    clearInterval(interval);
  }
}

function tick() {
  console.log('TICK');
}

function end() {
  console.log('END');
}
