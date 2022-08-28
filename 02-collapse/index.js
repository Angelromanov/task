const animation = document
  .querySelector(".collapsible__content")
  .animate(
    { transform: ["translateX(-600px)", "translateX(0px)"] },
    { duration: 250, fill: "both", easing: "ease-out" }
  );
animation.pause();
document.querySelector("button").addEventListener("click", () => {
  if (animation.playState === "paused")
    animation.play();
  else
    animation.reverse();
});