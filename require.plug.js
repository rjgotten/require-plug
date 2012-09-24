define([ "module" ], function( module ) {

	return {
		version : "0.0.1",
		load    : function( name, require, load, config ) {
			var plugins = module.config()[ name ] || [];
			
			if ( "string" === typeof plugins ) {
				plugins = [ plugins ];
			}
			
			require([ name ], function( value ) {			
				require( plugins, function() {
					load( value );
				});			
			});			
		}
	}
});