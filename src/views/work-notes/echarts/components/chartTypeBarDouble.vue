/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-06 15:17:21
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-06 17:05:01
 * @Description: 双柱状图
 */

<template>
  <div>
    <div :id="id" class="chart" />
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'ChartTypeBar',
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
        legend: {
          // color: ['#4390ee', '#ff8604'],
          orient: 'horizontal',
          top: '3%',
          right: '5%',
          icon: 'roundRect',
          selectedMode: true,
          itemWidth: 16,
          itemHeight: 8,
          textStyle: {
            fontSize: 12,
            color: '333'
          },
          data: ['女', '男']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: [
          {
            type: 'value',
            name: '人',
            splitNumber: 2,
            min: 0,
            max: 500,
            inverse: true,
            gridIndex: 0,
            axisTick: {
              show: false,
              interval: 2,
              inside: false
            },
            axisLabel: {
              show: true,
              interval: 2,
              color: 'rgba(7,207,253,.6)',
              fontSize: 12
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#666'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#08304A',
                opacity: 0.3
              }
            }
          },
          {
            type: 'value',
            name: '人',
            min: 0,
            max: 500,
            splitNumber: 2,
            gridIndex: 1,
            axisTick: {
              interval: 2,
              show: false
            }, // 是否显示刻度
            axisLine: {
              // Y轴轴线样式
              show: true, // 是否显示X轴
              lineStyle: {
                color: '#666'
              }
            },
            axisLabel: {
              show: true,
              interval: 2,
              color: 'rgba(7,207,253,.6)',
              fontSize: 12
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#08304A',
                opacity: 0.3
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            gridIndex: 0,
            inverse: true,
            data: ['18岁以上', '6-18岁', '6岁以下'],
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          {
            type: 'category',
            gridIndex: 1,
            inverse: true,
            data: ['18岁以上', '6-18岁', '6岁以下'],
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: '#A5BEC7',
              align: 'right',
              fontSize: 10
            },
            axisLine: {
              show: false
            }
          }
        ],
        grid: [
          {
            top: '15%',
            width: '30%',
            bottom: '15%',
            gridIndex: 0
          },
          {
            top: '15%',
            left: '60%',
            width: '30%',
            bottom: '15%',
            gridIndex: 1
          }
        ],
        series: [
          {
            name: '女',
            type: 'bar',
            barWidth: '30%',
            gridIndex: 0,
            itemStyle: {
              normal: {
                color: {
                  type: 'liner',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  // 渐变色
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgb(215,102,255)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(116,23,136)'
                    }
                  ]
                },
                barBorderRadius: [20, 0, 0, 20]
              }
            },
            animationDuration: 3000,
            data: [150, 250, 350]
          },
          {
            name: '男',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: {
                  type: 'liner',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  // 渐变色
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgb(41,91,161)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(73,156,255)'
                    }
                  ]
                },
                barBorderRadius: [0, 20, 20, 0]
              }
            },
            data: [100, 200, 300]
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
