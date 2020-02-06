/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-06 00:52:41
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-06 11:05:50
 * @Description: 导航效果
 */

<template>
  <div class="demo_container">
    <el-row>
      <el-col :span="12">
        <h3 class="demo_title">自定义导航切换效果1</h3>
        <h5 class="demo_txt">点击当前标签变色，再次点击取消变色，兄弟元素取消变色。</h5>
        <div class="demo_con">
          <div class="demo_main nav_demo_main">
            <ul>
              <li
                v-for="item of navData"
                :key="item.id"
                :class="{ navActive: item.id === navActiveIndex }"
                @click="navClickFun1(item)"
              >{{item.name}}</li>
            </ul>
          </div>
          <div class="demo_link">
            <el-link href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/work-notes/navigation-effect/index.vue" target="_blank">
              <i class="el-icon-link"></i>
            </el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <h3 class="demo_title">自定义导航切换效果2</h3>
        <h5 class="demo_txt">所有点击过的都变色，再次点击取消变色。</h5>
        <div class="demo_con">
          <div class="demo_main nav_demo_main">
            <ul>
              <li
                v-for="item of navData"
                :key="item.id"
                :class="{navActive: activeGroup.indexOf(item.id) > -1}"
                @click="navClickFun2(item)"
              >{{item.name}}</li>
            </ul>
          </div>
          <div class="demo_link">
            <el-link href="https://github.com/liuzhenghe30265/vue-admin-template/tree/master/src/views/work-notes/navigation-effect/index.vue" target="_blank">
              <i class="el-icon-link"></i>
            </el-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navData: [
        {
          id: '101',
          name: 'nav1'
        },
        {
          id: '102',
          name: 'nav2'
        },
        {
          id: '103',
          name: 'nav3'
        }
      ],
      navActiveIndex: '101', // 默认选中
      activeGroup: [] // 选中的集合
    }
  },
  methods: {
    // 添加导航选中样式
    setActive(id) {
      // this.navActiveIndex = id
      // 再次点击取消选中
      this.navActiveIndex =
        this.navActiveIndex === id
          ? (this.navActiveIndex = '')
          : (this.navActiveIndex = id)
    },
    // 导航点击事件
    navClickFun1(item) {
      this.setActive(item.id)
      switch (item.name) {
        case 'nav1':
          break
        case 'nav2':
          break
        case 'nav3':
          break
        default:
          break
      }
    },
    navClickFun2(item) {
      const index = item.id
      if (this.activeGroup.indexOf(index) === -1) {
        // 选中
        this.activeGroup.push(index)
        console.log(this.activeGroup)
        switch (item.name) {
          case 'nav1':
            break
          case 'nav2':
            break
          case 'nav3':
            break
          default:
            break
        }
      } else {
        // 取消选中
        const spliceIndex = this.activeGroup.indexOf(index)
        this.activeGroup.splice(spliceIndex, 1)
        console.log(this.activeGroup)
        switch (item.name) {
          case 'nav1':
            break
          case 'nav2':
            break
          case 'nav3':
            break
          default:
            break
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.navActive {
  color: red;
}
.nav_demo_main {
  margin: 10px 0;
  ul {
    overflow: hidden;
    li {
      cursor: pointer;
      float: left;
      margin-right: 10px;
    }
  }
}
</style>