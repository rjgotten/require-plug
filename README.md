# plug

A simple AMD loader plugin for loaders like [RequireJS](http://requirejs.org) that
makes it easier to set up plugins for libraries like [jQuery](http://jquery.com).

This allows you to load additional plugin scripts that depend on a master library
script before the loading of the master script is completed. In this way you can
finish plugging the library before it is used.

## Usage

`plug` only works with AMD loaders that support
[module config](http://requirejs.org/docs/api.html#config-moduleconfig), like
RequireJS 2.0.

First, set up a module config for `plug` and list out the plugins for your
master library. 

```javascript
require.config({
	config: {
		plug: {
			"jquery": [ "jquery.ui", "jquery.validate" ]
		}
	}
});
```

In this example, the jQuery library will be plugged with both jQuery UI and a forms
validation plugin.

Then, to load your master library along with all of its plugins, use the `plug!` loader
prefix ID:

```javascript
define(['plug!jquery'], function ( $ ) {
	// jQuery will have been plugged with jQuery UI and the validation
	// plugin by the time this function is called.
    
	$( "#popup-form" )
		.validate()
		.dialog();    
});
```