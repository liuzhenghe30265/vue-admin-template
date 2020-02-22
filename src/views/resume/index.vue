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
                <div class="sc_li">
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
                </div>
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
                  <el-image
                    class="image_con"
                    :src="item.imgUrl"
                    fit="contain"
                    :preview-src-list="projectExperiencePicList"
                  ></el-image>
                  <div class="picture_txt">
                    <a :href="item.url" target="_blank">
                      <div class="pi_name">{{item.name}}</div>
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
  </div>
</template>
<script>
import resumeData from '@mock/resume.json'
export default {
  name: '',
  data() {
    return {
      resumeData: '',
      educationData: '',
      educationPicList: [],
      projectExperience: '',
      projectExperiencePicList: []
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
      this.projectExperience = resumeData.projectExperience // 教育情况
      const projectExperiencePicList = this.projectExperience.items
      for (let i = 0; i < projectExperiencePicList.length; i++) {
        this.projectExperiencePicList.push(projectExperiencePicList[i].imgUrl)
      }

      console.log(this.educationData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resume.scss';
</style>
