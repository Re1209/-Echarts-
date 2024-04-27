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
				fontSize:'12px'
		  	},
		  	interval: 0,
		  	
		  },
	      data: ['浙江人事宝科技', '金蝶软件(中国)', '广州法运贸易'],
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
	        10,5,4
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
	      data: [13.70,24.00,12.5]
	    }
	  ]
	};
	myChart.setOption(option);
})