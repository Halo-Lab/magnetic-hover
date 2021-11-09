import MagneticHover from "../js/magneticHover";

//init
const elem = document.getElementById("box");
const distanceBox = document.getElementById("distance");

const xBox = document.getElementById('X');
const yBox = document.getElementById('Y');

if (elem) {
  new MagneticHover({
    element: elem,
    radius: 122,
    callback: (distance, { coordinateX: X, coordinateY: Y}) => {
      distanceBox.innerText = distance;

      xBox.innerText =`X: ${X} px;`;
      yBox.innerText = `Y: ${Y} px;`;
    },
  });
}
