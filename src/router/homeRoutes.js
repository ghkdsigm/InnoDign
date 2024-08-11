const homeRoutes = [
    {
      path: '/home',
      name: 'intro',
      component: () => import('@/pages/home/index.vue'),
      title: 'Main',
      icon: 'far fa-bell fa-fw text-2xl',
      meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: false }
    },    
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import('@/pages/home/menu/introduce.vue'),
      title: 'Main',
      icon: 'far fa-bell fa-fw text-2xl',
      meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: false }
    },  
  ];
  
  export default homeRoutes;