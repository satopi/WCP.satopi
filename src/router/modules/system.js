/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: 'noRedirect',
  name: 'System',
  meta: {
    title: '系统配置',
    icon: 'cog-fill'
  },
  children: [
    {
      path: 'setting',
      name: 'Setting',
      component: () => import('@/views/system/setting/index'),
      meta: { title: '参数设置',icon: 'cog-fill' }
    },
    {
      path: 'log',
      name: 'Log',
      component: () => import('@/views/system/log/index'),
      meta: { title: '系统日志',icon: 'file-fill' }
    },
    {
      path: 'task',
      component: () => import('@/views/system/task/index'), // Parent router-view
      name: 'Task',
      meta: { title: '任务调度' ,icon: 'clock-fill'},
      redirect: '/nested/task/example',
      children: [
        {
          path: 'example',
          component: () => import('@/views/system/task/example'),
          name: 'Example',
          meta: { title: '调度实例' ,icon: 'structured-data'}
        }
      ]
    }
  ]
}

export default systemRouter
