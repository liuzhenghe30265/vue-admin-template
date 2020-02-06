/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-06 00:53:06
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-06 10:49:41
 * @Description: 工作笔记路由配置
 */

/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/layout'

const projectNote = {
  path: '/work-notes',
  component: Layout,
  redirect: '/work-notes',
  name: 'work-notes',
  meta: {
    title: '工作笔记',
    icon: 'el-icon-edit'
  },
  children: [{
    path: '/navigation-effect',
    component: () => import('@/views/work-notes/navigation-effect/index'),
    name: 'navigation-effect',
    meta: {
      title: '导航切换效果',
      icon: 'el-icon-more',
      noCache: true
    }
  }]
}
export default projectNote
