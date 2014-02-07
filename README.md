# Angular Experiments #

* Use `ng-if` instead of `ng-show`
* Avoid use of `function()` in `ng-class` attribute like

HTML:
	
	<div ng-class="{'color': someFunction() }"></div>

* Use [quick-ng-repeat](https://github.com/allaud/quick-ng-repeat) instead of `ng-repeat`
* Never use `ng-repeat="for e in getElements()"`, instead use `ng-repeat="for e in elementsArray"` and fill `elementsArray` by function call in controller (otherwise `getElements()` function will be called as many times as many items `ng-repat` has)
* Use `track by` for `ng-repeat` to make DOM elements re-usable by AngularJS (speeds up the rendering on eg. a long lists)
* Always check that if a function is really needed to be initialized at page load, eg.: if data is not yet available and another service/controller/directive relies on that data, do not initialize, util the data is there.
* Use `ng-controller="AppController as appctr"` in HTML so variables with same name in different controllers doesn't mix up:

HTML:
	
	<div ng-controller="AppController as appctr">
		{{ appctr.userName }}
	</div>
	<div ng-controller="LoginController as loginctr">
		{{ loginctr.userName }}
	</div>


## IE8 ##


* Hide the element (with `ng-if` if possible) when loading data into it/changing (by a scope variable) if it contains lot of bindings

HTML:
	
	<div ng-if="isLoadingHeavyData()"></div>

* Use lazy load for loading not visible modules/views/partials
* Use [`bindonce`](https://github.com/Pasvaz/bindonce) if `quick-ng-repeat` not gives you the expected speed
* Use `limitTo:limiter` in `ng-repeat` to not load ALL data, use `limiter` variable to control the number of the loaded elements

## Videos ##
* [Google I/O 2013 - Design Decisions in AngularJS](https://www.youtube.com/watch?v=HCR7i5F5L8c)
* [Introduction to AngularJS in 60 minutes](https://www.youtube.com/watch?v=i9MHigUZKEM)
* [AngularJS MTV Meetup: Best Practices](https://www.youtube.com/watch?v=ZhfUv0spHCY)


## Must read articles for web application development ##

* [http://www.sitepoint.com/10-reasons-use-angularjs](http://www.sitepoint.com/10-reasons-use-angularjs)
* [http://angular-tips.com/blog/2013/08/why-does-angular-dot-js-rock](http://angular-tips.com/blog/2013/08/why-does-angular-dot-js-rock)
* [http://wintellect.com/blogs/jlikness/10-reasons-web-developers-should-learn-angularjs](http://wintellect.com/blogs/jlikness/10-reasons-web-developers-should-learn-angularjs)
* [http://www.ng-newsletter.com/advent2013/#!/](http://www.ng-newsletter.com/advent2013/#!/)
* [http://blog.scalyr.com/2013/10/31/angularjs-1200ms-to-35ms/](http://blog.scalyr.com/2013/10/31/angularjs-1200ms-to-35ms/)
* [http://tech.small-improvements.com/2013/09/10/angularjs-performance-with-large-lists/](http://tech.small-improvements.com/2013/09/10/angularjs-performance-with-large-lists/)
* [http://stackoverflow.com/questions/9682092/databinding-in-angularjs/9693933#9693933](How $digest() and $apply() works in Angular)
