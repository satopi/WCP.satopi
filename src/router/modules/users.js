/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const usersRouter = {
  path: '/users',
  component: Layout,
  redirect: '/users/organize-management',
  name: 'Users',
  meta: {
    title: '组织用户管理',
    icon: 'user-group-fill'
  },
  children: [
    {
      path: 'user-management',
      component: () => import('@/views/users/user-management/index'),
      name: 'User-management',
      meta: { title: '用户管理',icon: 'user-fill' }
    },
    {
      path: 'organize-management',
      component: () => import('@/views/users/organize-management'),
      name: 'Organize-management',
      meta: { title: '组织机构管理',icon: 'home' }
    }
  ]
}
export default usersRouter
