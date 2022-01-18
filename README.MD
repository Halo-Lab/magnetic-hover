# magneticHover

magneticHover lets you trigger hover effect on the element when the cursor is near it, but not over it yet.

<img src="http://api.halo-lab.com/wp-content/uploads/magnetic-rotation.gif" alt="Magnetic hover - rotation" height="392" width="600">

## Examples
https://codesandbox.io/s/elegant-bogdan-eupvp?file=/src/index.js <br />
https://codesandbox.io/s/competent-kare-tnx6t?file=/src/index.js <br />
https://codesandbox.io/s/friendly-tdd-pdyw3?file=/src/index.js


## Installation
```
npm install --save magnetic-hover
```

## Usage

```
import MagneticHover from "../js/magneticHover";

// find target element
const elem = document.getElementById("box");

new MagneticHover({
  element: elem,
  radius: 122,
  callback: (distance) => {
    // get the distance from the cursor to the target element
    console.log(distance);
  },
});
```

## Settings

* element - DOM element
* radius - how far from the target element callback should be triggered
* callback - function that's gonna be triggered once cursor is over the range between radius and target element

## Word from author

Have fun! ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img src="https://dgestran.sirv.com/Images/supported-by-halolab.png" alt="Supported by Halo lab" height="60">
</a>
