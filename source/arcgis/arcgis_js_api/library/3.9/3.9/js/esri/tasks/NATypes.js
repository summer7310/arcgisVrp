/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/tasks/NATypes",["dojo/_base/lang","dojo/has","esri/kernel"],function(a,h,b){var c={esriFeet:"esriNAUFeet",esriKilometers:"esriNAUKilometers",esriMeters:"esriNAUMeters",esriMiles:"esriNAUMiles",esriNauticalMiles:"esriNAUNauticalMiles",esriYards:"esriNAUYards"},d={NONE:"esriNAOutputLineNone",STRAIGHT:"esriNAOutputLineStraight",TRUE_SHAPE:"esriNAOutputLineTrueShape",TRUE_SHAPE_WITH_MEASURE:"esriNAOutputLineTrueShapeWithMeasure"},e={ALLOW_BACKTRACK:"esriNFSBAllowBacktrack",AT_DEAD_ENDS_ONLY:"esriNFSBAtDeadEndsOnly",
NO_BACKTRACK:"esriNFSBNoBacktrack",AT_DEAD_ENDS_AND_INTERSECTIONS:"esriNFSBAtDeadEndsAndIntersections"},f={NONE:"esriNAOutputPolygonNone",SIMPLIFIED:"esriNAOutputPolygonSimplified",DETAILED:"esriNAOutputPolygonDetailed"},g={FROM_FACILITY:"esriNATravelDirectionFromFacility",TO_FACILITY:"esriNATravelDirectionToFacility"},k={LengthUnit:c,OutputLine:d,UTurn:e,OutputPolygon:f,TravelDirection:g};h("extend-esri")&&(a.setObject("tasks._NALengthUnit",c,b),a.setObject("tasks.NAOutputLine",d,b),a.setObject("tasks.NAUTurn",
e,b),a.setObject("tasks.NAOutputPolygon",f,b),a.setObject("tasks.NATravelDirection",g,b));return k});