# magneticHover

magneticHover lets you trigger hover effect on the element when the cursor is near it, but not over it yet.

<img src="https://1mpkoh2uj7ew36r28p3t8kxt11gl-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/1024px-The_Creation_Michelangelo_Italy_Vatican_-_Creative_Commons_by_gnuckx_3492637506-660x350.jpg" alt="creation of adam picture. hands crop">

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


<a href="https://www.halo-lab.com/?utm_source=github-brifinator-3000">
    <img src="http://api.halo-lab.com/wp-content/uploads/dev_halo.svg" alt="Developed in Halo lab" height="60">
</a>

