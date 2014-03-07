## domready

It's easy. Works like this:

``` js
domready(function () {
    // dom is loaded!
});
```

-------------------------
## Legacy Support Notice

Compatibility with `IE6` and `IE7` may work but has not yet been fully tested. If your application requires this level of support, please use [ded](https://github.com/ded)’s release [`0.3.0`](https://github.com/ded/domready/tree/v0.3.0).

-------------------------

### Browser support

  * IE8+
  * Firefox 4+
  * Safari 3+
  * Chrome
  * Opera

### Including with Ender

Don't already have [Ender](http://enderjs.com)? Install it like this:

``` sh
npm install ender -g
```

Include domready in your package:

``` sh
ender add domready
```

Then use it like this

``` js
require('domready')(function () {
  $('body').html('<p>boosh</p>')
})

// or

$(document).ready(function () {
  $('body').html('<p>boosh</p>')
})
```
