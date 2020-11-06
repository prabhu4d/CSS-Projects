const box = document.querySelector(".box");

oldX = 0;
oldY = 0;
document.onmousemove = function (e) {
  box.style.display = "block";

  newX = e.pageX;
  newY = e.pageY;
  box.style.left = newX + "px";
  box.style.top = newY + "px";

  if (newX > oldX && newY > oldY) {
    box.style.transform = "rotate(180deg)";
  }
  if (newX > oldX && newY < oldY) {
    box.style.transform = "rotate(90deg)";
  }
  if (newX < oldX && newY > oldY) {
    box.style.transform = "rotate(270deg)";
  }
  if (newX < oldX && newY < oldY) {
    box.style.transform = "rotate(0deg)";
  }

  oldX = newX;
  oldY = newY;
};
