/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-06 11:10:13
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-06 17:23:26
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
            <chart-type-bar-double :series="barChartData" style="width:100%;height:250px;" />
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
import { getList } from '@/api/table'
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
      pieChartData: []
    }
  },
  mounted() {
    this.getLineChartDataFun() // 获取折线图数据
    getList().then(response => {
      console.log(response.data.items)
    })
  },
  methods: {
    // 获取折线图数据
    getLineChartDataFun() {
      this.lineChartData = echartsData.lineChartData.items
      this.barChartData = echartsData.barChartData.items
      this.pieChartData = echartsData.pieChartData.items
    }
  }
}
</script>
