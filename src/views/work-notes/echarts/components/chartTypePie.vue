/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-06 15:17:48
 * @Last Modified by:   liuzhenghe30265
 * @Last Modified time: 2020-02-06 15:17:48
 * @Description: 饼图
 */

<template>
  <div>
    <div :id="id" class="chart" />
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'ChartTypePie',
  props: {
    data: {
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
    data: {
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
        // title: {
        //   text: '数量统计',
        //   subtext: '小标题',
        //   left: 'left'
        // },
        color: ['#4390ee', '#ff8604', '#71EC00'],
        animation: true,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          data: ['北京', '上海', '广东']
        },
        series: [
          {
            name: '数量',
            type: 'pie',
            radius: ['60%', '30%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: this.data
          }
        ]
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
