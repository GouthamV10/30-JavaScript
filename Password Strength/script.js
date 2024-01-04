var pass = document.getElementById("password");
var msg = document.getElementById("msg");
var str = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (pass.value.length < 4) {
    str.innerHTML = "Weak";
    str.style.color = "red";
    pass.style.borderColor = "#ff5925";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "Average";
    str.style.color = "orange";
    pass.style.borderColor = "orange";
  } else if (pass.value.length > 8) {
    str.innerHTML = "Strong";
    str.style.color = "green";
    pass.style.borderColor = "green";
  }
});
