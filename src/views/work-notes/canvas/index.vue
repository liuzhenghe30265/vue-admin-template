/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-23 10:47:02
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-23 10:47:48
 * @Description: Canvas
 */

<template>
  <div class="demo_container">
    <el-row>
      <el-col ref="demo" :span="12" :xs="24">
        <el-divider content-position="left">HTML 转图片</el-divider>
        <h5 class="demo_txt">HTML 元素转图片</h5>
        <div class="demo_con">
          <div class="demo_main canvas_demo_main">
            <html-to-picture></html-to-picture>
          </div>
          <div class="demo_link">
            <el-link
              href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/work-notes/canvas/components/htmlToPicture.vue"
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
import htmlToPicture from '@/views/work-notes/canvas/components/htmlToPicture'
export default {
  components: {
    htmlToPicture
  }
}
</script>
<style lang="scss" scoped>
</style>