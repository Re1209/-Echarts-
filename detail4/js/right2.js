//导入数据
$(function(){
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('right2'));
//配置数据
option = {
  color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(255, 170, 255, 1.0)'
              },
              {
                offset: 1,
                color: 'rgba(170, 170, 255, 1.0)'
              }
            ],
            false
  ),
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {////图片与容器的距离
    top: '4%',
    right: '1%',
    bottom: '2%',
    left: '1%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
	  axisLine: {
	    show: true,
	    lineStyle: {
	      color: '#CEDDF2'
	    }
	  },
      // prettier-ignore
      data: ['上海','深圳','广州','北京','成都','杭州','苏州','武汉','长沙','东莞']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '薪资',
      position: 'left',
      alignTicks: true,
	  splitLine: { show: false } ,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#CEDDF2'
        }
      },
      axisLabel: {
        formatter: '{value}K'
      }
    }
  ],
  series: [
    {
      name: '薪资（K）',
      type: 'bar',
      data: [
        18.09,16.64,13.92,19.55,12.63,13.48,15.77,12.67,12.29,14.68
      ]
    }
  ]
};

		 myChart.setOption(option);
})