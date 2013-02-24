#LoopyJS
*Loops and CSS Animations*

Loopyjs is a simple Javascript that let's you apply CSS animations to an array of DOM elements so that they animate in order with a specified delay.

##Library and Special Thanks
LoopJS is using Animate.css (https://github.com/daneden/animate.css) for additional animation styles.  Thanks @daneden.

##How to Use
Add the loopy.css to the `<head>` of your HTML page and the loopy.js into a `<script>` tag right before the closing of the `</body>` tag.

```javascript
new LoopyJS("dom-holder-id",{"animation":"spin","delay":300});
```

##Animation Options
Currently, animations that are supported are: `spin`, `twistIn`, `news`, `sizzle` and any animation from Animate.css (https://github.com/daneden/animate.css).  

##Delay Options
Delay is specificed in milliseconds.  

##Demos
Check out the demos http://zazove.org/loopyjs/ and Tweet at me for suggestions (http://twitter.com/jzazove)


