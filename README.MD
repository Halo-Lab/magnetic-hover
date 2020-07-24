# magneticHover

magneticHover lets you trigger hover effect on the element when the cursor is near it, but not over it yet.

<img src="http://api.halo-lab.com/wp-content/uploads/magnetic-rotation.gif" alt="Magnetic hover - rotation" height="392" width="600">

## Examples
https://codesandbox.io/s/elegant-bogdan-eupvp?file=/src/index.js <br />
https://codesandbox.io/s/competent-kare-tnx6t?file=/src/index.js <br />
https://codesandbox.io/s/friendly-tdd-pdyw3?file=/src/index.js


## Installation
```
npm install --save magneticHover
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

## Status
The project is supported by Halo lab development team, we're not working on it regularly, but when we have time between clients' project. <br />
Though, feel free to open issues and you're very welcome to contribute. 

 <br />
 <br />

<a href="https://www.halo-lab.com/?utm_source=github-brifinator-3000">
    <img src="http://api.halo-lab.com/wp-content/uploads/dev_halo.svg" alt="Developed in Halo lab" height="60">
</a>

