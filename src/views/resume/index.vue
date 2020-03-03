/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-03-03 09:55:21
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-03-03 11:08:05
 * @Description: 简历
 */

<template>
  <div>
    <div class="demo_container">
      <el-row>
        <el-col :span="24">
          <el-divider content-position="left">教育情况</el-divider>
          <h5 class="demo_txt">{{educationData.name}}（{{educationData.date}})</h5>
          <h5 class="demo_txt">{{educationData.professional}}</h5>
          <div class="demo_con picture_con">
            <el-row>
              <el-col
                v-for="(item,index) of educationData.pictures"
                :key="index"
                :span="6"
                :md="6"
                :sm="12"
                :xs="24"
              >
                <div class="pc_con">
                  <el-image
                    class="image_con"
                    :src="item.url"
                    fit="contain"
                    :preview-src-list="educationPicList"
                  ></el-image>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-divider content-position="left">技能水平</el-divider>
          <h5 class="demo_txt"></h5>
          <div class="demo_con skillLevels_con">
            <el-row>
              <el-col :span="6" :md="6" :sm="12" :xs="24">
                <!-- <div class="sc_li">
                  <span>JavaScript</span>
                  <el-progress :percentage="50"></el-progress>
                </div>
                <div class="sc_li">
                  <span>JavaScript</span>
                  <el-progress :percentage="50"></el-progress>
                </div>
                <div class="sc_li">
                  <span>JavaScript</span>
                  <el-progress :percentage="50"></el-progress>
                </div>-->
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-divider content-position="left">工作经验</el-divider>
          <h5 class="demo_txt"></h5>
          <div class="demo_con">......</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-divider content-position="left">项目经历</el-divider>
          <h5 class="demo_txt"></h5>
          <div class="demo_con picture_con">
            <el-row>
              <el-col
                v-for="(item,index) of projectExperience.items"
                :key="index"
                :span="6"
                :md="6"
                :sm="12"
                :xs="24"
              >
                <div class="pc_con">
                  <div class="image_con" @click="openDialogFun(item)">
                    <img
                      :src="item.imgUrl | chooseImage"
                      width="100%"
                      height="100%"
                      alt
                      style="object-fit: contain;"
                    />
                  </div>
                  <div class="picture_txt">
                    <a :href="item.url" target="_blank">
                      <div class="pi_name">{{item.name}}</div>
                      <div class="pi_technology">
                        <b v-for="(t,tindex) of item.technology" :key="tindex">{{t}}</b>
                      </div>
                      <div class="pi_date">{{item.date}}</div>
                      <i class="pi_link el-icon-link"></i>
                    </a>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 弹窗 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
      class="dialog"
    >
      <div class="technology">
        <el-tag v-for="(item,index) of projectDetails.technology" :key="index">{{item}}</el-tag>
      </div>
      <div class="intro">{{projectDetails.intro}}</div>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) of projectDetails.projectPicList" :key="index">
          <img :src="item" width="100%" height="100%" alt style="object-fit: contain;" />
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
    <!-- 弹窗 E -->
  </div>
</template>
<script>
import resumeData from '@mock/resume.json'
export default {
  name: '',
  filters: {
    // 返回第一张图片
    chooseImage: function(value) {
      return value.split(',')[0]
    }
  },
  data() {
    return {
      resumeData: '',
      educationData: '',
      educationPicList: [],
      projectExperience: '',
      dialogVisible: false,
      dialogTitle: '',
      projectDetails: {}
    }
  },
  computed: {},
  mounted() {
    this.getResumeDataFun()
  },
  methods: {
    getResumeDataFun() {
      this.resumeData = resumeData
      this.educationData = resumeData.educationData // 教育情况
      const pictures = this.educationData.pictures
      for (let i = 0; i < pictures.length; i++) {
        this.educationPicList.push(pictures[i].url)
      }
      this.projectExperience = resumeData.projectExperience // 项目经历
      const items = this.projectExperience.items
      for (let i = 0; i < items.length; i++) {
        items[i].projectPicList = items[i].imgUrl.split(',')
      }
    },
    openDialogFun(item) {
      this.dialogVisible = true
      this.projectDetails = item
      this.dialogTitle = item.name
      console.log(item)
    },
    handleClose() {
      this.dialogVisible = false
    },
    chooseImage(value) {
      return value.split(',')[0]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resume.scss';
</style>
