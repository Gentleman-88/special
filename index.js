document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.querySelector(".no_button");

  noButton.addEventListener("mouseover", function () {
    moveButtonToRandomPosition(noButton);
  });

  noButton.addEventListener("onClick", function () {
    moveButtonToRandomPosition(noButton);
  });


  function moveButtonToRandomPosition(button) {
    const bodyRect = document.body.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = bodyRect.width - buttonRect.width;
    const maxY = bodyRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

      button.style.position = "absolute";
      button.style.transition = "left 0.2s, top 0.2s";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
  }
});