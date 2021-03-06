import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
export const suffix = ' | Vuement';

const router = new VueRouter({
  scrollBehavior(to, _, savePosition) {
    if (to.name === 'component-details') return { x: 0, y: 0 };
    if (savePosition) return savePosition;
  },
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackPrefetch: true */ '@/views/Home.vue'),
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('@/views/Components.vue'),
      meta: {
        title: 'Components',
      },
    },
    {
      path: '/components/:name',
      name: 'component-details',
      component: () => import('@/views/ComponentDetails.vue'),
      meta: {
        title: 'Component',
      },
    },
    {
      path: '/colors',
      name: 'colors',
      component: () => import('@/views/Colors.vue'),
      meta: {
        title: 'Colors',
      },
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@/views/Guide.vue'),
      meta: {
        title: 'Guide',
      },
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('@/views/Playground.vue'),
      meta: {
        title: 'Playground',
      },
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
