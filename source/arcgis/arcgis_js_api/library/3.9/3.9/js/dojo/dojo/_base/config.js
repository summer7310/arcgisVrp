/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/_base/config",["../has","require"],function(e,d){var a={},c=d.rawConfig,b;for(b in c)a[b]=c[b];!a.locale&&"undefined"!=typeof navigator&&(a.locale=(navigator.language||navigator.userLanguage).toLowerCase());return a});