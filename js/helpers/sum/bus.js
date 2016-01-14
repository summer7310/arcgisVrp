/**
 * 公交调度模块
 * @author summer
 * @date 2016-1-12
 */

define([],function(){

	var START_TIME = new Date(79,5,24, 5, 30, 0);
    var END_TIME = new Date(79,5,24, 19, 40, 0);
    var TimeList = new Array();
    var segData = new Array();
    var busData = new Array();
    /*a,b为数据格式转换*/
    var a = new Array();
    var b = new Array();
    /*时间和天气影响数据*/
    var dateFactor = new Array();
    var weatherFactor = new Array();
    var WORKDAY_FACTOR = new Array( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );
    var WEEKEND_FACTOR = new Array( 0, 2, 3, 3, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1 );
    var HOLIDAY_FACTOR = new Array( 0, 3, 3, 3, -1, -1, -2, -1, -1, -1, -1, 1, 1, -1 );
    var SPIT_FACTOR = new Array( 0, 0.5, 0.5, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.6, 0.6, 0.8 );
    var MODERATE_FACTOR = new Array( 0, 0.7, 0.7, 0.7, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.8, 0.8, 0.9 );
    var HEAVERAIN_FACTOR = new Array( 0, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1 );
    var SCOUTHER_FACTOR = new Array( 0, 0.6, 0.6, 0.6, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.7, 0.7, 0.6 );
    var GREATSNOW_FACTOR = new Array( 0, 1, 1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1, 1, 1.2 );
    var SUNSHINE_FACTOR = new Array( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

    dateFactor = [WORKDAY_FACTOR, WEEKEND_FACTOR, HOLIDAY_FACTOR];
    weatherFactor = [SPIT_FACTOR, MODERATE_FACTOR, HEAVERAIN_FACTOR, SCOUTHER_FACTOR, GREATSNOW_FACTOR, SUNSHINE_FACTOR];

    var schtimeTime;
    var workdaydata = [
        [ 21, 33, 47, 63, 96, 109, 140, 154, 156, 163, 170, 186, 209, 217,
                208, 198, 187, 179, 168, 136, 126, 103, 77, 52, 2, 0, 0 ],
        [ 52, 80, 112, 153, 219, 233, 294, 316, 343, 354, 370, 410, 474,
                493, 502, 482, 464, 449, 439, 400, 353, 300, 230, 173, 57,
                18, 0 ],
        [ 102, 160, 226, 312, 434, 461, 578, 628, 680, 692, 718, 792, 922,
                968, 986, 951, 936, 928, 924, 869, 789, 629, 459, 347, 164,
                69, 0 ],
        [ 151, 202, 252, 299, 397, 421, 502, 540, 589, 599, 619, 696, 776,
                811, 811, 768, 751, 736, 723, 658, 574, 462, 326, 244, 88,
                32, 0 ],
        [ 57, 89, 121, 160, 217, 235, 282, 302, 320, 328, 337, 375, 431,
                449, 431, 394, 376, 361, 345, 297, 235, 170, 127, 94, 33,
                22, 0 ],
        [ 40, 70, 99, 136, 196, 212, 258, 275, 291, 296, 305, 338, 391,
                408, 387, 347, 337, 324, 314, 283, 231, 187, 153, 106, 40,
                20, 0 ],
        [ 35, 60, 88, 122, 174, 188, 229, 242, 250, 253, 260, 288, 336,
                351, 323, 277, 250, 239, 230, 194, 154, 125, 101, 69, 35,
                20, 0 ],
        [ 36, 63, 93, 128, 186, 201, 245, 261, 274, 282, 290, 323, 375,
                389, 369, 332, 316, 306, 296, 276, 249, 209, 179, 140, 89,
                52, 0 ],
        [ 40, 66, 107, 149, 206, 224, 271, 287, 300, 306, 317, 344, 399,
                417, 396, 369, 355, 351, 342, 310, 278, 234, 202, 162, 88,
                40, 0 ],
        [ 34, 60, 97, 132, 185, 204, 248, 266, 278, 284, 293, 321, 365,
                383, 363, 329, 313, 307, 298, 262, 246, 211, 181, 136, 76,
                32, 0 ],
        [ 36, 63, 96, 133, 184, 217, 247, 272, 300, 314, 326, 359, 397,
                415, 420, 385, 398, 397, 394, 358, 338, 288, 264, 241, 150,
                89, 0 ],
        [ 78, 118, 148, 211, 299, 327, 394, 416, 449, 470, 490, 541, 599,
                617, 582, 531, 542, 539, 529, 466, 420, 351, 326, 275, 187,
                80, 0 ],
        [ 80, 123, 156, 210, 293, 319, 383, 412, 442, 456, 475, 523, 579,
                596, 553, 493, 493, 495, 490, 456, 440, 376, 299, 250, 112,
                27, 0 ],
        [ 31, 61, 87, 133, 192, 219, 249, 270, 279, 284, 297, 315, 348,
                356, 318, 282, 286, 288, 287, 268, 248, 193, 142, 105, 48,
                17, 0 ] ];


    function BusSchedule(date, weather){

        var dateData = dateFactor[date];
        var weatherData = weatherFactor[weather];

        TimeList.push(START_TIME);
        schtimeTime = START_TIME;   
        var row = workdaydata.length;// 行数
        var max = new Array(row);//同一时段内的最大客流量
        var baseinterval = new Array(row);// 基准的发车时间间隔
        var businterval = new Array(row);// 最终的发车间隔

        // 遍历二维数组数据,生成发车间隔
        for (var i = 0; i < row; i++) {
            var temptimes;// 理论发车间隔
            var re = /([0-9]+\.[0-9]{2})[0-9]*/;  
            max[i] = findmax(workdaydata[i]);
            temptimes = 3600.0 / max[i];
            if (temptimes >= 12.0) {
                baseinterval[i] = 12;
            } else if (temptimes <= 2.0) {
                baseinterval[i] = 2;
            } else {
                // 四舍五入并保留1位小数
                baseinterval[i] = temptimes.toFixed(2);
            }
        }

        businterval = caculateinterval(dateData, weatherData, baseinterval);
        // 输出发车间隔数组
        /*for(var i=0,len = businterval.length; i<len; i++){
            console.log(i + " ")
        }*/
        console.log("发车间隔：");
        // 输出发车时刻表
        for (var i = 0; i < 14; i++) {
            //console.log("第" + (i + 1) + "时段：");
           
            addtime(schtimeTime, businterval[i], new Date(79,5,24, i + 6, 30, 0));
            busData.push(segData);
            //console.log(segData);

        }
         
         for(var i=0;i<14;i++){
            b=new Array();
            for(var j=0;j<14;j++){
                b.push(busData[j][i]);
            } 
            a.push(b);
         }
        //console.log(a)

    } 

    /*最大值*/
    function findmax(a){
        var max = 0;
        for(var key in a){
            if(max < a[key]){
                max = a[key];
            }
        }
        return max;
    }
    /*计算发车间隔*/
    function caculateinterval(datefactor, weatherfactor, baseinterval){
        var result = new Array();
        for(var i = 0; i < 14; i++){
            result[i] = baseinterval[i] + datefactor[i] + weatherfactor[i];
        }
        return result;
    }
    /*生成时刻表*/
    function addtime(starttime, interval, endtime){
        segData = new Array();
        var a;
        var b;
        var newtimeminute, newtimesecond, newtimehour;
        var minute = parseInt(interval);// 时间间隔分钟部分
        var second = parseInt(((interval - minute) * 60));// 时间间隔秒数部分

        newtimesecond = starttime.getSeconds();
        newtimeminute = starttime.getMinutes();
        newtimehour = starttime.getHours();

        do {
            newtimeminute += minute;
            newtimesecond += second;
            // 秒针、分钟进位操作
            if (newtimesecond >= 60) {
                newtimesecond -= 60;
                newtimeminute += 1;
            }
            if (newtimeminute >= 60) {
                newtimeminute -= 60;
                newtimehour += 1;
            }

            schtimeTime.setHours(newtimehour);
            schtimeTime.setMinutes(newtimeminute);
            schtimeTime.setSeconds(newtimesecond);
            a = schtimeTime.getHours();
            b = endtime.getHours();
            TimeList.push(new Date(79,5,24, newtimehour, newtimeminute, newtimesecond));

            var str = newtimehour+":"+newtimeminute+":"+newtimesecond;
            segData.push(str);
            //console.log(str);
        } while (b-a>0&&b-a<=1);

    }

    
    return {
    	BusSchedule : function(date, weather){

            if(a.length == 0){
                var date = $('#date').val();
                var weather = $('#weather').val();
                BusSchedule(date, weather);
                console.log(a)
            }else{
                a.length = 0;
                var date = $('#date').val();
                var weather = $('#weather').val();
                BusSchedule(date, weather);
            }
            
    	},

    	getData: function(){
    		return a;
    	},
    }

});