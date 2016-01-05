/**
 * 图标模块
 * @authors summer 
 * @date    2014-12-17 18:16:39
 * @version $Id$
 */

define([
	'highcharts/highcharts'
	], function(highcharts){
		
			//生成物流配送数量统计表
			
			function quantity(){
				$(document).ready(function() {  
				   var chart = {
				      type: 'column'
				   };
				   var title = {
				      text: '货物配送数量统计分析'   
				   };    
				   var xAxis = {
				      type: 'category',
				      labels: {
				         rotation: -45,
				         style: {
				            fontSize: '13px',
				            fontFamily: 'Verdana, sans-serif'
				         }
				      }
				   };
				   var yAxis ={
				      min: 0,
				      title: {
				        text: '货物配送数量 (kg)'
				      }
				   };  
				   var tooltip = {
				      pointFormat: '货物总配送数量: <b>{point.y:.1f} kg</b>'
				   };   
				   var credits = {
				      enabled: true
				   };
				   var series= [{
				            name: '货物配送月份',
				            data: [
				                ['2015年1月', 200],
				                ['2015年2月', 310],
				                ['2015年3月', 142],
				                ['2015年4月', 196],
				                ['2015年5月', 180],
				                ['2015年6月', 260],
				                ['2015年7月', 238],
				                ['2015年8月', 110],
				                ['2015年9月', 221],
				                ['2015年10月', 162],
				                ['2015年11月', 190],
				                ['2015年12月', 240],
				            ],
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                format: '{point.y:.1f}', // one decimal
				                y: 10, // 10 pixels down from the top
				                style: {
				                    fontSize: '12px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				   }];     
				      
				   var json = {};   
				   json.chart = chart; 
				   json.title = title;   
				   json.xAxis = xAxis;
				   json.yAxis = yAxis;   
				   json.tooltip = tooltip;   
				   json.credits = credits;
				   json.series = series;
				   $('#container').highcharts(json);
				  
				});
			}
			//生成物流配送价格统计表
			
			function price(){
				$(document).ready(function() {  
				   var chart = {
				      type: 'column'
				   };
				   var title = {
				      text: '货物配送数量统计分析'   
				   };    
				   var xAxis = {
				      type: 'category',
				      labels: {
				         rotation: -45,
				         style: {
				            fontSize: '13px',
				            fontFamily: 'Verdana, sans-serif'
				         }
				      }
				   };
				   var yAxis ={
				      min: 0,
				      title: {
				        text: '货物配送数量 (kg)'
				      }
				   };  
				   var tooltip = {
				      pointFormat: '货物总配送数量: <b>{point.y:.1f} kg</b>'
				   };   
				   var credits = {
				      enabled: true
				   };
				   var series= [{
				            name: '货物配送月份',
				            data: [
				                ['2015年1月', 200],
				                ['2015年2月', 310],
				                ['2015年3月', 142],
				                ['2015年4月', 196],
				                ['2015年5月', 180],
				                ['2015年6月', 260],
				                ['2015年7月', 238],
				                ['2015年8月', 110],
				                ['2015年9月', 221],
				                ['2015年10月', 162],
				                ['2015年11月', 190],
				                ['2015年12月', 240],
				            ],
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                format: '{point.y:.1f}', // one decimal
				                y: 10, // 10 pixels down from the top
				                style: {
				                    fontSize: '12px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				   }];     
				      
				   var json = {};   
				   json.chart = chart; 
				   json.title = title;   
				   json.xAxis = xAxis;
				   json.yAxis = yAxis;   
				   json.tooltip = tooltip;   
				   json.credits = credits;
				   json.series = series;
				   $('#container').highcharts(json);
				  
				});
			}
			return {
				'testFunction'	: function(){
					alert('测试一个helper模块的函数');
				},

				'quantity' : function(){
					quantity();
				},

				'price' : function(){
					price();
				}

			}
});

