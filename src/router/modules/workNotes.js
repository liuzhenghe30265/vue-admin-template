/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2020-02-05 23:44:15
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-02-05 23:59:21
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
    path: '/111',
    component: () => import('@/views/dashboard/index'),
    name: '111',
    meta: {
      title: '工作笔记',
      icon: 'el-icon-edit',
      noCache: true
    }
  }]
}
export default projectNote
