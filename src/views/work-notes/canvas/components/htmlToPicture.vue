/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-22 11:30:14
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-23 10:51:37
 * @Description: HTML 转图片
 */

<template>
  <div>
    <div style="margin-bottom:20px;">
      <h1 ref="demo" class="demo" style="border:1px solid #dedede">Hello!</h1>
    </div>
    <img :src="picUrl" alt style="max-width:100%;" />
  </div>
</template>
<script>
import html2canvas from 'html2canvas'
export default {
  data() {
    return {
      picUrl: ''
    }
  },
  mounted() {
    this.makePictureFun()
  },
  methods: {
    makePictureFun() {
      this.$nextTick(async () => {
        const picture = await this.htmlToCanvasFun()
        this.picUrl = picture
      })
    },
    htmlToCanvasFun() {
      const DOM = this.$refs.demo
      return html2canvas(DOM).then(canvas => {
        return canvas.toDataURL('image/png')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
