/**
 * 地图视图和信息管理视图切换
 * @attribute summer
 * @date 2015-11-30
 * @default [value]
 */
define([],function(){
	function init(){
		gisApp.factory('view',function($rootScope){
			function goTo(aim, url){
				if(aim == 'map'){
					$('#map').css('display','block');
					$('#system').css('display','none');
				}else{
					$('#map').css('display','none');
					$('#system').css('display','block');
					$('#system').find('iframe').attr('src',url);
				}
			}

			return {
				goto : goTo
			}
		});
	}

	return {
		init : init
	};
});