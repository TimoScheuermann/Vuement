import { components } from '@/utils/constants';
import InterimComponent from '@/views-interim/InterimComponent.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
export const prefix = 'TC Components | ';

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views//Home.vue'),
      meta: {
        title: 'Home',
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
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/Settings.vue'),
      meta: {
        title: 'Settings',
      },
    },
    {
      path: '/themes',
      name: 'themes',
      component: () => import('@/views/Themes.vue'),
      meta: {
        title: 'Themes',
      },
    },

    {
      path: '/component',
      component: InterimComponent,
      children: components.map((x) => {
        return {
          path: x.toLowerCase(),
          name: 'tc' + x,
          component: () => import('@/views/components/' + x + '.vue'),
          meta: { title: 'TC ' + x },
        };
      }),
    },

    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
