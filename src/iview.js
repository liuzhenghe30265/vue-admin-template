/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-03-10 11:30:19
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2020-03-10 11:07:47
 * @Description: 按需引入 iview 组件（以 modal 对话框为例）
 */
import Vue from 'vue'
import 'iview/dist/styles/iview.css' // 组件样式文件
// import '@/styles/iview-modal.css' // 为防止 iview 的样式覆盖 element-ui 的样式，只取需要组件的样式
import {
//   Button,
  Modal

} from 'iview'

// Vue.component('Button', Button)
Vue.component('Modal', Modal)
