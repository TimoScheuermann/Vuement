import VMComponents from '@/vuement/index.esm';
import Vue from 'vue';
import { Route } from 'vue-router';
import App from './App.vue';
import './registerServiceWorker';
import router, { prefix } from './router';
import store from './store';

Vue.config.productionTip = false;

router.afterEach((to: Route) => {
  document.getElementsByTagName('title')[0].innerHTML = prefix + to.meta.title;
});

Vue.use(VMComponents);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
