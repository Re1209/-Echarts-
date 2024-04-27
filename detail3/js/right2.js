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
      data: ['深圳','广州','北京','上海','成都','杭州','武汉','郑州','西安','石家庄']
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
        15.75,12.27,23.40,15.28,11.70,15.52,14.50,9.27,14.20,7.00
      ]
    }
  ]
};

		 myChart.setOption(option);
})