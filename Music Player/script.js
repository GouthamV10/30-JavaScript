document.addEventListener("DOMContentLoaded", function () {
  let progress = document.getElementById("progress");
  let song = document.getElementById("song");
  let ctrlIcon = document.getElementById("ctrlIcon");

  if (!progress || !song || !ctrlIcon) {
    console.error("Error: One or more elements not found.");
    return;
  }

  song.addEventListener("loadedmetadata", function () {
    progress.max = song.duration;
  });

  function playPause() {
    if (song.paused) {
      song
        .play()
        .then(() => {
          ctrlIcon.classList.remove("fa-play");
          ctrlIcon.classList.add("fa-pause");
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    } else if (song.pause) {
      song.pause();
      ctrlIcon.classList.remove("fa-pause");
      ctrlIcon.classList.add("fa-play");
    } else {
      console.error("Error: song.pause is not a function.");
    }
  }

  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);

  progress.addEventListener("input", function () {
    song.currentTime = progress.value;
  });

  song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
  });

  // Add an event listener to handle the click on the play/pause button
  let playPauseButton = document.getElementById("playPauseButton");
  if (playPauseButton) {
    playPauseButton.addEventListener("click", playPause);
  } else {
    console.error("Error: playPauseButton not found.");
  }
});
