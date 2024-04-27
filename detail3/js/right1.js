$(function(){
	var myChart = echarts.init(document.getElementById('right1'));
	var data = [
	  {
			"name": "1年以下",
		    "value": 7,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "大专",
		        "value": 2
		    }, {
		        "name": "本科	",
		        "value": 5
		    }, {
		        "name": "硕士",
		        "value": 0
		    }]
		}, {
		    "name": "1-3年",
		    "value": 146,
		    "children": [{
		        "name": "不限",
		        "value":16
		    }, {
		        "name": "大专",
		        "value": 70
		    }, {
		        "name": "本科	",
		        "value": 60
		    }, {
		        "name": "硕士",
		        "value": 0
		    }]
		},  {
		    "name": "3-5年",
		    "value": 175,
		    "children": [{
		        "name": "不限",
		        "value":10
		    }, {
		        "name": "大专",
		        "value": 48
		    }, {
		        "name": "本科	",
		        "value": 117
		    }, {
		        "name": "硕士",
		        "value": 0
		    }]
		},
		{
		    "name": "5-10年",
		    "value": 52,
		    "children": [{
		        "name": "不限",
		        "value":2
		    }, {
		        "name": "大专",
		        "value": 10
		    }, {
		        "name": "本科	",
		        "value": 40
		    }, {
		        "name": "硕士",
		        "value": 0
		    }]
		},
		{
		    "name": "10年以上",
		    "value": 1,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "大专",
		        "value": 0
		    }, {
		        "name": "本科	",
		        "value": 1
		    }, {
		        "name": "硕士",
		        "value": 0
		    }]
		},
		{
		    "name": "不限",
		    "value": 46,
		    "children": [{
		        "name": "不限",
		        "value":10
		    }, {
		        "name": "大专",
		        "value": 13
		    }, {
		        "name": "本科	",
		        "value": 23
		    }, {
		        "name": "硕士",
		        "value": 0
		    }]
		},
		{
		    "name": "在校/应届",
		    "value": 23,
		    "children": [{
		        "name": "不限",
		        "value":1
		    }, {
		        "name": "大专",
		        "value": 3
		    }, {
		        "name": "本科	",
		        "value": 18
		    }, {
		        "name": "硕士",
		        "value": 1
		    }]
		}
	];
	var option = {
		
		grid: {////图片与容器的距离
		  top: '1%',
		  right: '1%',
		  bottom: '1%',
		  left: '1%',
		  containLabel: true
		},
	  tooltip: {
			    trigger: 'item',
			    axisPointer: {
			    type: 'shadow'
			    },
				
			},
			color: [
		       
				'#ffa7ff',
				'#ff86f9',
				'#f345ff'
		    ],
	  series: {
	    type: 'sunburst',
	    itemStyle: {
			borderColor: '#360051',
			borderRadius: 3,
			borderWidth: 2
	    },
		emphasis: {//设置高亮
		    focus: 'ancestor',
		},
	    data: data,
	    radius: ['20%', '100%'],
	    label: {
			color: '#fff',
			textBorderColor: '#ffa7ff',
			textBorderWidth: 1,
			rotate: 0,
	    },
	    
	  }
	};
	myChart.setOption(option);
})
