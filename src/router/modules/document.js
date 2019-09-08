/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const documentRouter = {
  path: '/document',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Document',
  meta: {
    title: '文档管理',
    icon: 'folderopen-fill'
  },
  children: [
    {
      path: 'attachment',
      component: () => import('@/views/document/attachment'),
      name: 'Attachment',
      meta: { title: '附件管理', noCache: true , icon: 'file-fill' }
    },
    {
      path: 'team',
      component: () => import('@/views/document/team'),
      name: 'Team',
      meta: { title: '工作小组管理', noCache: true , icon: 'user-group-fill' }
    },
    {
      path: 'classify',
      component: () => import('@/views/document/classify'),
      name: 'Classify',
      meta: { title: '文档分类', noCache: true , icon: 'tree-table' }
    },
    {
      path: 'document-management',
      component: () => import('@/views/document/document-management'),
      name: 'Document-management',
      meta: { title: '文档管理', noCache: true , icon: 'folderopen-fill' }
    },
    {
      path: 'full-text-index',
      component: () => import('@/views/document/full-text-index'),
      name: 'Full-text-index',
      meta: { title: '全文索引', noCache: true , icon: 'search' }
    },
    {
      path: 'sticky-document',
      component: () => import('@/views/document/sticky-document'),
      name: 'Sticky-document',
      meta: { title: '置顶文档', noCache: true , icon: 'arrow-alt-from-botto' }
    },
    {
      path: 'service',
      component: () => import('@/views/document/service'),
      name: 'Service',
      meta: { title: '推荐服务', noCache: true , icon: 'collection-fill' }
    },
    {
      path: 'rank',
      component: () => import('@/views/document/rank'),
      name: 'Rank',
      meta: { title: '用户文档排名', noCache: true , icon: 'rank' }
    },
    {
      path: 'messages',
      component: () => import('@/views/document/messages'),
      name: 'Messages',
      meta: { title: '用户消息', noCache: true , icon: 'mail-fill' }
    }
  ]
}

export default documentRouter
