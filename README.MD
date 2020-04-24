<h1>MagneticHover</h1>

magneticHover lets you trigger hover effect on the element when the cursor is near it, but not over it yet.
<br/>
<br/>
<img src="https://camo.githubusercontent.com/b6f8f539be0badf3f8ba45b61204835c8cf4a132/68747470733a2f2f316d706b6f6832756a3765773336723238703374386b78743131676c2d7770656e67696e652e6e6574646e612d73736c2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30352f3130323470782d5468655f4372656174696f6e5f4d696368656c616e67656c6f5f4974616c795f5661746963616e5f2d5f43726561746976655f436f6d6d6f6e735f62795f676e75636b785f333439323633373530362d363630783335302e6a7067" alt="creation of adam picture. hands crop" data-canonical-src="https://1mpkoh2uj7ew36r28p3t8kxt11gl-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/1024px-The_Creation_Michelangelo_Italy_Vatican_-_Creative_Commons_by_gnuckx_3492637506-660x350.jpg" style="max-width:100%;">
<br/>
<b>Usage</b>
<br/>
<br/>

```
import MagneticHover from "magnetic-hover"

const htmlElement= document.getElementById('element')

function showDistance(distance){
  console.log(distance)
}
new MagneticHover({
  element:htmlElement
  radius:100,
  callback:showDistance
})
```

<b>Settings:</b>
<br/>
element - HTML element
radius - distance to element, where will work mousemove event
callback - function

<b>Example:</b>
some link to example
