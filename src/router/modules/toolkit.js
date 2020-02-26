/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-26 11:13:48
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-26 11:17:58
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
    icon: 'el-icon-edit'
  },
  children: [{
    path: '/make-image',
    component: () => import('@/views/toolkit/make-image/index'),
    name: 'navigation-effect',
    meta: {
      title: '图片生成工具',
      icon: 'el-icon-picture',
      noCache: true
    }
  }]
}
export default toolkit
