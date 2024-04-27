//导入数据
$(function(){
	var myChart = echarts.init(document.getElementById('left2'));
	option = {
	  tooltip: {
	    trigger: 'axis',
	    axisPointer: {
	      type: 'cross',
	      crossStyle: {
	        color: '#999'
	      }
	    }
	  },
	  grid: {
	  	left: 50,
	  	right: 25,
	  	bottom: 40
	  },
	  legend: {
	    data: [ '岗位数', '薪资'],
		textStyle:{
		    color: '#ffffff'//字体颜色
		},
	  },
	  xAxis: [
	    {
	      type: 'category',
		  axisLabel:{
		  	textStyle:{
		  	    color: '#ffffff',//字体颜色
				fontSize:'8px'
		  	},
		  	interval: 0,
		  	
		  },
	      data: ['北京必来屋网络科技', '百度在线网络技术(北京)', '微宝云信息技术开发河北'],
	      axisPointer: {
	        type: 'shadow'
	      }
	    }
	  ],
	  yAxis: [ 
	    {
	      type: 'value',
	      name: '岗位数',
		  nameTextStyle:{
			   color:"#ffffff", 
		   },
	      min: 0,
	      max: 10,
	      interval:5,
	      axisLabel: {
	        formatter: '{value}',
			textStyle:{
			    color: '#ffffff'//字体颜色
			},
	      }
	    },
	    {
	      type: 'value',
	      name: '薪资',
		  nameTextStyle:{
		  			   color:"#ffffff", 
		   },
	      min: 0,
	      max: 40,
	      interval: 10,
	      axisLabel: {
	        formatter: '{value} K',
			textStyle:{
			    color: '#ffffff'//字体颜色
			},
	      }
	    }
	  ],
	  series: [
	    {
			color: '#aaaaff',
	      name: '岗位数',
	      type: 'bar',
	      tooltip: {
	        valueFormatter: function (value) {
	          return value;
	        }
	      },
	      data: [
	        9,7,6
	      ]
	    },
	    {
			color: '#00ffff',
	      name: '薪资',
	      type: 'line',
	      yAxisIndex: 1,
	      tooltip: {
	        valueFormatter: function (value) {
	          return value + 'K';
	        }
	      },
	      data: [31.11, 33.57, 6.00]
	    }
	  ]
	};
	myChart.setOption(option);
})