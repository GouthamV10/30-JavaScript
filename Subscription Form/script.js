const scriptURL =
  "https://script.google.com/macros/s/AKfycbxdW7FHU7BjtRhi7bDDowEEmfDVM5YmDkk0cMwBnjK1Z7B7Dt4g41I0XbOEwOUD7Cdfjg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("Msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
