/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-03-03 11:30:19
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-03-03 12:10:26
 * @Description: Element Dialog 对话框
 */
<template>
  <div>
    <el-dialog
      v-dialogDrag
      title="提示"
      :visible.sync="show.show"
      width="30%"
      :before-close="closeDialogFun"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialogFun">取 消</el-button>
        <el-button type="primary" @click="closeDialogFun">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    closeDialogFun() {
      this.show.show = false
    }
  }
}
</script>