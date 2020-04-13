import MagneticHover from "../js/magneticHover";

//init
const elem = document.getElementById("box");
const distanceBox = document.getElementById("distance");
if (elem) {
  new MagneticHover({
    element: elem,
    radius: 122,
    callback: (distance) => {
      distanceBox.innerText = distance;
    },
  });
}
