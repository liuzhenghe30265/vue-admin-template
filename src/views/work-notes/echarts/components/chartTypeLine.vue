/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-06 15:17:13
 * @Last Modified by:   liuzhenghe30265
 * @Last Modified time: 2020-02-06 15:17:13
 * @Description: 折线图
 */

<template>
  <div>
    <div :id="id" class="chart" />
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'ChartTypeLine',
  props: {
    series: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      id: this.generatorOnlyId()
    }
  },
  computed: {},
  watch: {
    series: {
      handler: function(val, oldVal) {
        this.drawChart()
      },
      deep: true
    }
  },
  mounted() {
    this.drawChart()
  },
  created() {},
  methods: {
    // 获取当前时间
    getNowData() {
      const dateTime = new Date()
      const year = dateTime.getFullYear()
      const month = dateTime.getMonth() + 1
      const date = dateTime.getDate()
      const hours = dateTime.getHours()
      const minutes = dateTime.getMinutes()
      const seconds = dateTime.getSeconds()
      const dateStr =
        year + '' + month + '' + date + '' + hours + '' + minutes + '' + seconds
      return dateStr
    },
    // 生成图表的唯一ID
    generatorOnlyId() {
      return this.getNowData() + Math.floor(Math.random() * 10000)
    },
    // 绘制图表
    drawChart() {
      const chart = echarts.init(document.getElementById(this.id))
      if (chart === undefined) {
        console.error(`echarts init dom id ${this.id} failed`)
        return
      }
      chart.setOption(this.generatorChartOption())
    },
    // 绘制图表
    generatorChartOption() {
      return {
        title: {
          text: '数量统计'
        },
        animation: true,
        color: ['#4390ee', '#ff8604', '#71EC00'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['趋势1', '趋势2', '趋势3'],
          textStyle: {
            color: '#BDDDE9'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // x 轴文字旋转角度
          // axisLabel: {
          //   interval: 0,
          //   rotate: 40
          // },
          data: [
            '01-01',
            '01-02',
            '01-03',
            '01-04',
            '01-05',
            '01-06',
            '01-07',
            '01-08',
            '01-09',
            '01-10'
          ]
        },

        yAxis: {
          type: 'value'
        },
        series: this.series
      }
    }
  }
}
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
