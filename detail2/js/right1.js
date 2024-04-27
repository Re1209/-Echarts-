$(function(){
	var myChart = echarts.init(document.getElementById('right1'));
	var data = [
	  {
			"name": "1年以下",
		    "value": 3,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "大专",
		        "value": 0
		    }, {
		        "name": "本科	",
		        "value": 3
		    }, {
		        "name": "硕士",
		        "value": 0
		    }]
		}, {
		    "name": "1-3年",
		    "value": 118,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "大专",
		        "value": 13
		    }, {
		        "name": "本科	",
		        "value": 104
		    }, {
		        "name": "硕士",
		        "value": 1
		    }]
		},  {
		    "name": "3-5年",
		    "value": 170,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "大专",
		        "value": 17
		    }, {
		        "name": "本科	",
		        "value": 144
		    }, {
		        "name": "硕士",
		        "value": 9
		    }]
		},
		{
		    "name": "5-10年",
		    "value": 87,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "大专",
		        "value": 3
		    }, {
		        "name": "本科	",
		        "value": 83
		    }, {
		        "name": "硕士",
		        "value": 1
		    }]
		},
		{
		    "name": "10年以上",
		    "value": 3,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "大专",
		        "value": 0
		    }, {
		        "name": "本科	",
		        "value": 3
		    }, {
		        "name": "硕士",
		        "value": 0
		    }]
		},
		{
		    "name": "不限",
		    "value": 52,
		    "children": [{
		        "name": "不限",
		        "value":1
		    }, {
		        "name": "大专",
		        "value": 5
		    }, {
		        "name": "本科	",
		        "value": 46
		    }, {
		        "name": "硕士",
		        "value": 0
		    }]
		},
		{
		    "name": "在校/应届",
		    "value": 17,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "大专",
		        "value": 0
		    }, {
		        "name": "本科	",
		        "value": 13
		    }, {
		        "name": "硕士",
		        "value": 4
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
