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
      component: () => import('@/views/Home.vue'),
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('@/views/Buttons.vue'),
      meta: {
        title: 'Buttons',
      },
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
