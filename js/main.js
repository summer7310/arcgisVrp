/**
 * 主文件
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2014-12-11 10:43:38
 * @version $Id$
 */
(function(){
	//注册模块路径配置
	var MODULE_URL = location.pathname;//模块基准地址
	var R_MODULE_URL = 'http://localhost:8080/source/';//远程模块地址
	dojo.registerModulePath('controllers', MODULE_URL + '/js/controllers/');//控制器路径
	dojo.registerModulePath('services', MODULE_URL + '/js/services/');//服务模块路径
	dojo.registerModulePath('helpers', MODULE_URL + '/js/helpers/');//其他辅助模块路径
	dojo.registerModulePath('highcharts', R_MODULE_URL + 'highcharts/');//图表模块路径

	require({
		async: true,
		aliases: [['text', 'dojo/text']]
	});

	require([
		'controllers/lee/bootstrap',//初始化模块
		'dojo/ready'		
		], function(bootstrap, ready){
		ready(function(){
			bootstrap.init();
		});
	});
	
}).call(this);


