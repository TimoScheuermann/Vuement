import Vue from 'vue';
import { Route } from 'vue-router';
import App from './App.vue';
import './registerServiceWorker';
import router, { suffix } from './router';
import store from './store';
import Vuement from './vuement/index.esm';

Vue.config.productionTip = false;

router.afterEach((to: Route) => {
  let title = to.meta.title;
  if (to.name === 'component-details') title = to.params.name;
  title += suffix;

  document.title = title;

  const gt = document.querySelector('meta[name="title"]');
  if (gt) gt.setAttribute('content', title);

  const twitter = document.querySelector('meta[property="twitter:title"]');
  if (twitter) twitter.setAttribute('content', title);

  const og = document.querySelector('meta[property="og:title"]');
  if (og) og.setAttribute('content', title);
});

Vue.use(Vuement, { theme: 'light' });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#vuement');
