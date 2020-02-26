/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-06 11:10:13
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-26 20:34:52
 * @Description: ECharts
 */

<template>
  <div class="demo_container">
    <el-row>
      <el-col :span="12" :xs="24">
        <el-divider content-position="left">折线图</el-divider>
        <h5 class="demo_txt"></h5>
        <div class="demo_con">
          <div class="demo_main">
            <chart-type-line :series="lineChartData" style="width:100%;height:250px;" />
          </div>
          <div class="demo_link">
            <el-link
              href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/work-notes/echarts/components/chartTypeLine.vue"
              target="_blank"
            >
              <i class="el-icon-link"></i>
            </el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-divider content-position="left">饼图</el-divider>
        <h5 class="demo_txt"></h5>
        <div class="demo_con">
          <div class="demo_main">
            <chart-type-pie :data="pieChartData" style="width:100%;height:250px;" />
          </div>
          <div class="demo_link">
            <el-link
              href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/work-notes/echarts/components/chartTypePie.vue"
              target="_blank"
            >
              <i class="el-icon-link"></i>
            </el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-divider content-position="left">柱状图</el-divider>
        <h5 class="demo_txt"></h5>
        <div class="demo_con">
          <div class="demo_main">
            <chart-type-bar :series="barChartData" style="width:100%;height:250px;" />
          </div>
          <div class="demo_link">
            <el-link
              href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/work-notes/echarts/components/chartTypeBar.vue"
              target="_blank"
            >
              <i class="el-icon-link"></i>
            </el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-divider content-position="left">双柱状图</el-divider>
        <h5 class="demo_txt"></h5>
        <div class="demo_con">
          <div class="demo_main">
            <chart-type-bar-double
              :age="ageGroup"
              :female="femaleCount"
              :male="maleCount"
              :series="barChartData"
              :maximum="maximum"
              style="width:100%;height:250px;"
            />
          </div>
          <div class="demo_link">
            <el-link
              href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/work-notes/echarts/components/chartTypeBarDouble.vue"
              target="_blank"
            >
              <i class="el-icon-link"></i>
            </el-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import echartsData from '@mock/echarts.json' // 模拟 Echarts 数据
import ChartTypeLine from '@/views/work-notes/echarts/components/chartTypeLine'
import ChartTypeBar from '@/views/work-notes/echarts/components/chartTypeBar'
import ChartTypeBarDouble from '@/views/work-notes/echarts/components/chartTypeBarDouble'
import ChartTypePie from '@/views/work-notes/echarts/components/chartTypePie'
export default {
  components: {
    ChartTypeLine,
    ChartTypeBar,
    ChartTypeBarDouble,
    ChartTypePie
  },
  data() {
    return {
      lineChartData: [],
      barChartData: [],
      doubleBarChartData: [],
      pieChartData: [],
      ageGroup: [],
      femaleCount: [],
      maleCount: [],
      maximum: 0
    }
  },
  mounted() {
    this.getLineChartDataFun() // 获取折线图数据
  },
  methods: {
    // 获取折线图数据
    getLineChartDataFun() {
      this.lineChartData = echartsData.lineChartData.items
      this.barChartData = echartsData.barChartData.items
      this.pieChartData = echartsData.pieChartData.items
      this.doubleBarChartData = echartsData.genderData
      const femaleData = echartsData.genderData.female
      const maleData = echartsData.genderData.male
      const ageGroup = []
      const femaleCount = []
      const maleCount = []
      for (let i = 0; i < femaleData.length; i++) {
        ageGroup.push(femaleData[i].descp)
        femaleCount.push(femaleData[i].count)
      }
      for (let i = 0; i < maleData.length; i++) {
        maleCount.push(maleData[i].count)
      }
      this.ageGroup = ageGroup
      this.femaleCount = femaleCount
      this.maleCount = maleCount
      const allCounts = femaleCount.concat(maleCount)
      const maxVal = allCounts.sort(this.sortNumber).reverse()[0]
      this.maximum = Math.ceil(maxVal / 100) * 100
    },
    // 数组排序
    sortNumber(a, b) {
      return a - b
    }
  }
}
</script>
