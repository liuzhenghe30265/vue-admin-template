/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-26 11:13:48
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-28 11:22:02
 * @Description: 工具箱路由配置
 */
import Layout from '@/layout'

const toolkit = {
  path: '/toolkit',
  component: Layout,
  redirect: '/toolkit',
  name: 'toolkit',
  meta: {
    title: '工具',
    icon: 'el-icon-s-tools'
  },
  children: [{
    path: '/data-process',
    component: () => import('@/views/toolkit/data-process/index'),
    name: 'data-process',
    meta: {
      title: '数据处理',
      icon: 'el-icon-time',
      noCache: true
    }
  }, {
    path: '/make-image',
    component: () => import('@/views/toolkit/make-image/index'),
    name: 'make-image',
    meta: {
      title: '图片生成工具',
      icon: 'el-icon-picture',
      noCache: true
    }
  }]
}
export default toolkit
