var countdownDate = new Date("Oct 16, 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var differance = countdownDate - now;

  var days = Math.floor(differance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (differance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((differance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((differance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (differance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    alert("Launched!!!!!");
  }
}, 1000);
