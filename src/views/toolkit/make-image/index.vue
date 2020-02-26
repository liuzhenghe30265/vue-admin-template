/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-26 11:45:36
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-26 11:47:25
 * @Description: 图片生成工具
 */

<template>
  <div class="demo_container">
    <el-row>
      <el-col :span="12" :xs="24">
        <el-divider content-position="left">图片生成工具</el-divider>
        <h5 class="demo_txt">使用 mockjs 生成图片</h5>
        <div class="demo_con">
          <div class="demo_main nav_demo_main">
            <div class="from_box">
              <el-form
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="宽（px）" prop="width">
                  <el-input v-model="ruleForm.width"></el-input>
                </el-form-item>
                <el-form-item label="高（px）" prop="height">
                  <el-input v-model="ruleForm.height"></el-input>
                </el-form-item>
                <el-form-item label="背景色" prop="bgc">
                  <el-input v-model="ruleForm.bgc" placeholder="请输入二进制颜色（例：#000）"></el-input>
                </el-form-item>
                <el-form-item label="文字" prop="txt">
                  <el-input v-model="ruleForm.txt"></el-input>
                </el-form-item>
                <el-form-item label="文字颜色" prop="txtColor">
                  <el-input v-model="ruleForm.txtColor" placeholder="请输入二进制颜色（例：#000）"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即生成</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="demo-image" style="text-align:center;">
              <el-image :src="ruleForm.imageURL">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
          </div>
          <div class="demo_link">
            <el-link
              href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/toolkit/make-image/index.vue"
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
import Mock from 'mockjs'
import axios from 'axios'
export default {
  name: 'MakeImage',
  data() {
    return {
      ruleForm: {
        width: '100',
        height: '100',
        bgc: '',
        txt: '',
        txtColor: '',
        imageURL: '',
        fullscreenLoading: false
      },
      rules: {
        width: [{ required: true, message: '请输入图片宽度', trigger: 'blur' }],
        height: [
          { required: true, message: '请输入图片高度', trigger: 'blur' }
        ],
        bgc: [{ required: false, message: '', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.getImageURL()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.ruleForm.imageURL = ''
    },
    getImageURL() {
      const image = []
      const width = this.ruleForm.width
      const height = this.ruleForm.height
      const bgc = this.ruleForm.bgc
      const txt = this.ruleForm.txt
      const txtColor = this.ruleForm.txtColor
      image.push({
        imageURL: Mock.Random.image(width + 'x' + height, bgc, txtColor, txt)
      })
      Mock.mock('/imageData', 'get', image)
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      axios.get('/imageData').then(result => {
        this.ruleForm.imageURL = result.data[0].imageURL
        loading.close()
      })
    }
  }
}
</script>
