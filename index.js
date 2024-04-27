$(function(){
    echart_map();
	function echart_map(){
		var chartDom = document.getElementById('chart_map');
		var myChart = echarts.init(chartDom);
		function showProvince(){
			var geoCoordMap = {
				'北京': [116.23128,40.22077],'深圳': [113.88308,22.55329],'上海': [121.48941,31.40527],
				'广州': [113.27324,23.15792],'成都': [104.10194,30.65984],'杭州': [120.21201,30.2084],
				'武汉': [114.02919,30.58203],'南京': [118.8921,31.32751],'苏州': [120.63132,31.30227],
				'西安': [108.93425,34.23053],'长沙': [112.98626,28.25591],'重庆': [106.54041,29.40268],
				'郑州': [113.6401,34.72468],'东莞': [113.75179,23.02067],'无锡': [120.28429,31.52853],
				'合肥': [117.30794,31.79322],'珠海': [113.29673,22.20907],'佛山': [112.89262,22.90026],
				'大连': [121.5255,38.95223],'宁波': [121.84431,29.89889],'天津': [117.30983,39.71755],
				'嘉兴': [120.78483,30.74744],'厦门': [118.03394,24.48405],'济南': [116.75199,36.55358],
				'常州': [119.59794,31.72322],'福州': [119.27345,26.04769],'昆明': [102.82147,24.88554],
				'中山': [113.3926,22.51595],'青岛': [120.39629,36.30744],'惠州': [114.38257,23.08464],
				'南昌': [115.94422,28.54538],'长春': [125.28845,43.83327],'贵阳': [106.62298,26.67865],
				'沈阳': [123.46987,41.80515],'湖州': [120.41847,30.84979],'南宁': [108.27331,22.78121],
				'石家庄': [114.53952,38.03647],'南通': [120.85737,32.00986],'太原': [112.48699,37.94036],
				'哈尔滨': [126.95717,45.54774],'江门': [113.11103,22.56028],'扬州': [119.43157,32.39463],
				'温州': [121.1572,27.83616],'襄阳': [112.13555,32.04487],'绍兴': [120.49476,30.08189],
				'桂林': [110.30188,25.31402],'肇庆': [112.56706,23.15815],'新乡': [113.90598,35.3718],
				'镇江': [119.43396,32.13188],'保定': [115.45875,38.87757]
			};
			var data = [
				{name: '北京',value: 4207},
				{name: '深圳',value:3483},
				{name: '上海',value: 3438},
				{name: '广州',value: 1635},
				{name: '成都',value: 1298},
				{name: '杭州',value: 1294},
				{name: '武汉',value: 771},
				{name: '南京',value: 521},
				{name: '苏州',value: 495},
				{name: '西安',value: 356},
				{name: '长沙',value: 312},
				{name: '重庆',value: 199},
				{name: '郑州',value: 193},
				{name: '东莞',value: 192},
				{name: '无锡',value: 186},
				{name: '合肥',value: 166},
				{name: '珠海',value: 164},
				{name: '佛山',value: 159},
				{name: '大连',value: 132},
				{name: '宁波',value: 127},
				{name: '天津',value: 117},
				{name: '嘉兴',value: 103},
				{name: '厦门',value: 97},
				{name: '济南',value: 92},
				{name: '常州',value: 90},
				{name: '福州',value: 76},
				{name: '昆明',value: 74},
				{name: '中山',value: 73},
				{name: '青岛',value: 71},
				{name: '惠州',value: 61},
				{name: '南昌',value: 48},
				{name: '长春',value: 43},
				{name: '贵阳',value: 40},
				{name: '沈阳',value: 39},
				{name: '湖州',value: 38},
				{name: '南宁',value: 38},
				{name: '石家庄',value: 31},
				{name: '南通',value: 29},
				{name: '太原',value: 25},
				{name: '哈尔滨',value: 23},
				{name: '江门',value: 22},
				{name: '扬州',value: 20},
				{name: '温州',value: 19},
				{name: '襄阳',value: 18},
				{name: '绍兴',value: 18},
				{name: '桂林',value: 18},
				{name: '肇庆',value: 18},
				{name: '新乡',value: 17},
				{name: '镇江',value: 16},
				{name: '保定',value: 15}
			];
			var max = 10000,
			    min = 10;
			var maxSize4Pin = 100,
			    minSize4Pin = 20;
			var convertData = function (data){
				var res = [];
				for (var i = 0; i < data.length; i++) {
					var geoCoord = geoCoordMap[data[i].name];
					if (geoCoord) {
						res.push({
						name: data[i].name,
						value: geoCoord.concat(data[i].value)
						});
					}
				}
				return res;
			};
			myChart.setOption(option ={
				tooltip:{
					trigger: 'item',
					
				},
				geo:{
					zoom:1.2,
					show: true,
					map:'china',
					mapType: 'china',
					label:{
						normal:{
							show : true,
							textStyle:{color:"#4bf316"}
						},
						emphasis:{
							show: true,
							textStyle: {color: '#fff'}
						},
					},
					roam: true,
					itemStyle:{
						normal:{
							borderColor: 'rgba(147, 235, 248, 1)',
							borderWidth: 2,
							areaColor: {
							    type: 'radial',
							    x: 0.5,
							    y: 0.5,
							    r: 0.8,
								colorStops:[{
									offset: 0,
									color: 'rgba(175,238,238, 0)'
								},{
									offset: 1,
									color: 'rgba(255, 255, 255, 0.2)'
								}],
								globalCoord: false
							},
							shadowColor: 'rgba(128, 217, 248, 1)',
							shadowOffsetX: -2,
							shadowOffsetY: 2,
							shadowBlur: 10,
						},
						emphasis:{
							areaColor: '#389BB7',
							borderWidth: 0
						}
						
					}
				},
				series:[
					{
						name: '岗位',
						type: 'scatter',
						coordinateSystem: 'geo',
						symbol: 'pin',
						symbolSize: function(val){
							var a = (maxSize4Pin - minSize4Pin) / (max - min);
							var b = minSize4Pin - a * min;
							b = maxSize4Pin - a * max;
							return a * val[2] + b;
						},
						encode: {
						    value: 2
						},
						
						label:{
							normal:{
								formatter: '{b}',
								show: true,
								textStyle:{
									color: '#fff',
									fontSize: 10,
								}
							}
						},
						itemStyle:{
							normal:{
								color: 'red',
							}
						},
						data: convertData(data),
					},	
				]
			});
		}
		showProvince();
		window.addEventListener("resize", function () {
		    myChart.resize();
		});
	}
});
