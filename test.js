var timeLeft = 5;
var timePause = 2;
var ex = 1;

var elem = document.getElementById("timer");

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == -1) {
    pagepause();
  } else if (!pause) {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
  return;
}

function pagepause() {
  document.getElementById(ex).style.display = "none";
  document.getElementById("pause").style.display = "block";
  fPause();
  return;
}

function fPause() {
  if (timePause == -1) {
    pageswitch();
  } else if (!pause) {
    elem.innerHTML = timePause;
    timePause--;
  }
  return;
}

function pageswitch() {
  if (ex < 13) {
  ex++;
  document.getElementById("pause").style.display = "none";
  document.getElementById(ex).style.display = "block";
  timeLeft = 5;
  timePause = 2;
  }
  else if (ex == 13) {
    document.getElementById(ex).style.display = "none";
    document.getElementById("fin").style.display = "block";
    document.getElementById("btnpause").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("pause").style.display = "none";
  }
  return;
}

var pause = false;
var btnPause = document.getElementById("btnpause");

document.getElementById("btnpause").addEventListener("click", function () {
  if (pause == false) {
    btnPause.innerHTML = "Reprendre";
    pause = true;
  } else {
    btnPause.innerHTML = "Pause";
    pause = false;
  }
});