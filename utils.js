// Array cloning without preserving refernce to the original array
Array.prototype.clone = function() {
	return this.slice(0);
};

// range - returns array with length of i (eg.: rating-stars)
// see: http://www.cappuccino-project.org/blog/2010/03/internet-explorer-global-variables-and-stack-overflows.html
(function(){
	var range = function(i) {
		return parseInt(i)?range(i-1).concat(parseInt(i)):[];
	};
	window.range = range;
})();

// returns true/false and/or IE version
window.isIE = function() {
	var myNav = navigator.userAgent.toLowerCase();
	return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

// indexOf for older browsers
var indexOf = function(needle) {
	if(typeof Array.prototype.indexOf === 'function') {
		indexOf = Array.prototype.indexOf;
	} else {
		indexOf = function(needle) {
			var i = -1, index = -1;

			for(i = 0; i < this.length; i++) {
				if(this[i] === needle) {
					index = i;
					break;
				}
			}

			return index;
		};
	}

	return indexOf.call(this, needle);
};
