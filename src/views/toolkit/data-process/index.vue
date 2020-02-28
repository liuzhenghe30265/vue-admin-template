<!--
 * @Author: your name
 * @Date: 2020-02-27 10:47:11
 * @LastEditTime: 2020-02-28 11:20:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template/src/views/toolkit/data-process/index.vue
 -->
/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-27 11:18:12
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-28 11:20:25
 * @Description: 时间格式化
 */

<template>
  <div class="demo_container">
    <el-row>
      <el-col :span="24">
        <el-divider content-position="left">数据处理</el-divider>
        <h5 class="demo_txt"></h5>
        <div class="demo_con">
          <div class="demo_main nav_demo_main">
            <el-tag>日期格式化</el-tag>
            <el-tag>返回距当前时间的时间差</el-tag>
            <el-tag>返回 URL 中包含的参数</el-tag>
            <el-tag>根据对象的某个属性去重</el-tag>
            <el-tag>根据对象的某个属性值的大小排序</el-tag>
            <el-tag>根据对象中的时间排序</el-tag>
          </div>
          <div class="demo_link">
            <el-link
              href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/toolkit/data-process/index.vue"
              target="_blank"
            >
              <i class="el-icon-link">.vue</i>
            </el-link>
            <el-link
              href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/utils/toolkit.js"
              target="_blank"
            >
              <i class="el-icon-link">.js</i>
            </el-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {
  dateFormat,
  timeDifference,
  findUrlParam,
  filterFun,
  sortByProperty,
  sortByDate
} from '@/utils/toolkit.js'
export default {
  data() {
    return {
      schoolData: [
        {
          id: 1,
          name: '幼儿园',
          value: 1,
          date: '2018-05-13 12:01:32'
        },
        {
          id: 2,
          name: '小学',
          value: 24,
          date: '2017-10-13 08:36:43'
        },
        {
          id: 3,
          name: '中学',
          value: 8,
          date: '2020-01-13 17:57:32'
        },
        {
          id: 4,
          name: '中学',
          value: 8,
          date: '2020-01-13 17:57:32'
        }
      ]
    }
  },
  mounted() {
    // 日期格式化
    console.log(dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'))
    console.log(dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss q'))
    console.log(dateFormat(new Date(), 'yyyy-MM-dd E HH:mm:ss'))
    console.log(dateFormat(new Date(), 'yyyy-MM-dd EE hh:mm:ss'))
    console.log(dateFormat(new Date(), 'yyyy-MM-dd EEE hh:mm:ss'))
    console.log(dateFormat(new Date(), 'yyyy-M-d h:m:s.S'))

    // 返回距当前时间的时间差
    console.log(timeDifference(new Date()))
    console.log(timeDifference('1582855443'))
    console.log(timeDifference('1579974211'))

    // 返回 URL 中包含的参数
    console.log(
      findUrlParam('http://localhost:9528/#/format-time?id=0&name=admin')
    )
    // 根据对象的某个属性去重
    console.log(filterFun(this.schoolData, 'name'))

    // 根据对象的某个属性值的大小排序
    console.log(sortByProperty(this.schoolData, 'value'))

    // 根据对象中的时间排序
    console.log(sortByDate(this.schoolData))
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>