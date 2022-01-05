const timer = document.querySelector(".timer");
const startButton = document.querySelector(".start-button");
const pauseButton = document.querySelector(".pause-button");
const stopButton = document.querySelector(".stop-button");

let [milliseconds, seconds, minutes] = [0, 0, 0];
let interval;

startButton.addEventListener("click", () => {
  interval = setInterval(startTimer, 10);
});

function startTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timer.innerText = `${m}:${s}:${ms}`;
}

pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  [milliseconds, seconds, minutes] = [0, 0, 0];
  timer.innerText = "00:00:000";
});
