/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-03-03 11:30:08
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2020-03-10 11:03:40
 * @Description: 弹窗
 */

<template>
  <div class="demo_container">
    <el-row>
      <el-col :span="24">
        <el-divider content-position="left">Element Dialog 对话框</el-divider>
        <h5 class="demo_txt">带拖拽功能的 Element Dialog 对话框</h5>
        <div class="demo_con">
          <div class="demo_main nav_demo_main">
            <el-button type="primary" @click="openDialogFun">打开 Dialog 对话框</el-button>
            <element-dialog :show="dialogVisible"></element-dialog>
          </div>
          <div class="demo_link">
            <el-link
              href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/work-notes/popup-window/index.vue"
              target="_blank"
            >
              <i class="el-icon-link"></i>
            </el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="24">
        <el-divider content-position="left">iView Modal 对话框</el-divider>
        <h5 class="demo_txt">带拖拽功能的 iView Modal 对话框</h5>
        <div class="demo_con">
          <div class="demo_main nav_demo_main">
            <el-button type="primary" @click="iviewModal1 = true">打开第一个 Modal</el-button>
            <el-button type="primary" @click="iviewModal2 = true">打开第二个 Modal</el-button>
            <Modal v-model="iviewModal1" draggable scrollable title="Modal 1">
              <div>This is the first modal</div>
            </Modal>
            <Modal v-model="iviewModal2" draggable scrollable title="Modal 2">
              <div>This is the second modal</div>
            </Modal>
          </div>
          <div class="demo_link">
            <el-link
              href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/work-notes/popup-window/index.vue"
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
import elementDialog from './compoments/elementDialog'
export default {
  components: {
    elementDialog
  },
  data() {
    return {
      dialogVisible: {
        show: false
      },
      iviewModal1: false,
      iviewModal2: false
    }
  },
  methods: {
    openDialogFun() {
      this.dialogVisible.show = true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>Î