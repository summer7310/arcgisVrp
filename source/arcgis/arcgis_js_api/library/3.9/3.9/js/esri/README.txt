Questions related to supporting JSAPI on mobile devices

1. Is the API served to mobile devices thru a different serverapi endpoint?
    1-a. If not, would the HTTP handler look at the user agent to decide which build layer to respond with?
2. Do we map touch events to mouse events where it makes sense?
    2-a. Has implications as to how components (toolbars) making use of map events will adjust.
3. Do we expose native touch events through the esri.Map API?
4. Do we brand it as "mobile" build or "compact" build?
    4-a. If branded as "compact" build, what is the benefit/story for desktop apps?
5. There may be some esri.Map members that don't apply for mobile devices. Which ones?

=======
Modules
=======

_coremap.js

  Defines _CoreMap

map.js

  Defines _MapContainer (inherits from _CoreMap)
  Defines Map (inherits from _MapContainer)

_iphonemap.js

  Defines _iPhoneMapContainer (inherits from _CoreMap)
  Defines _iPhoneMap (inherits from _iPhoneMapContainer)

=======
Classes
=======

esri._CoreMap

  contains mapping functionality
  
esri._MapContainer

  contains map container functionality

esri.Map

  contains navigation functionality

==============================================================  
Runtime patches to verify when upgrading to a new Dojo version
==============================================================
1. FeatureLayer - override of dojo.io.script methods
2. map.js - use/override of internal slider methods and properties 
3. _GraphicMover.js - override of dojox.gfx.Mover constructor
4. GraphicsLayer - override of some methods in IE
5. TemplatePicker - use of some internal view (grid) properties and methods
6. [Does Kevin have runtime patches?]
