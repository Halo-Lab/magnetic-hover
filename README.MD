<h1>HoverElement</h1>
Good description...
<br/>
<br/>
<b>Usage</b>
<br/>
<br/>

```
import HoverElement from "hover-element"

const htmlElement= document.getElementById('element')

function showDistance(distance){
  console.log(distance)
}
HoverElement({
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
