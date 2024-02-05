$(document).ready(function () {
    $(".container").mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
  
    // Get the audio element
    var audio = document.getElementById("valentineSong");
  
    // Play the audio when the page loads
    audio.play();
  });
  