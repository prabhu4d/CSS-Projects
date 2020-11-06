const grid = document.querySelector(".grid");
const topLeft = document.querySelector(".top-left");
const topRight = document.querySelector(".top-right");
const bottomLeft = document.querySelector(".bottom-left");
const bottomRight = document.querySelector(".bottom-right");

oldX = 0;
oldY = 0;
document.onmousemove = function (e) {
  newX = e.pageX;
  newY = e.pageY;
  grid.style.left = newX - 20 + "px";
  grid.style.top = newY - 20 + "px";

  if (newX > oldX && newY > oldY) {
    topLeft.style.display = "block";
    currentArrow = 1;
  } else {
    topLeft.style.display = 'none';
  }
  if (newX > oldX && newY < oldY) {
    bottomLeft.style.display = "block";
    currentArrow = 2;
  } else {
    bottomLeft.style.display = "none";
  }

  if (newX < oldX && newY > oldY) {
    topRight.style.display = "block";
    currentArrow = 3;
  } else {
    topRight.style.display = "none";
  }
  if (newX < oldX && newY < oldY) {
    bottomRight.style.display = "block";
    currentArrow = 4;
  } else {
    bottomRight.style.display = "none";
  }
  if (newX == oldX || newY == oldY) {
    switch (currentArrow) {
      case 1:
        topLeft.style.display = "block";
        break;
      case 2:
        bottomLeft.style.display = "block";
        break;
      case 3:
        topRight.style.display = "block";
        break;
      case 4:
        bottomRight.style.display = "block";
        break;
    }
  }

  oldX = newX;
  oldY = newY;
};
