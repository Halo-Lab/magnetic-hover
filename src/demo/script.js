import MagneticHover from "../js/magneticHover";

//init
const elem = document.getElementById("box");
const distanceBox = document.getElementById("distance");
const coordinateX = document.getElementById("coordinateX");
const coordinateY = document.getElementById("coordinateY");

if (elem) {
  new MagneticHover({
    element: elem,
    radius: 122,
    callback: (distance) => {
      distanceBox.innerText = distance;
    },
  });
}

function onMousemove(event) {
  let bounds = event.target.getBoundingClientRect();
  let width = 60 / 2;
  let height = 30 / 2;
  let x = event.clientX - (bounds.left + width);
  let y = event.clientY - (bounds.top + height);
  coordinateX.innerText = x;
  coordinateY.innerText = y;
  return;
}

window.addEventListener("mousemove", onMousemove, false);
