import './core/hooks';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Prism from 'prismjs';
import globalComponents from './components/global';
import vmLayout from 'vue-mapp/ts/layout'
import vmButton from 'vue-mapp/ts/button'
import vmIcon from 'vue-mapp/ts/icon';
import list from 'vue-mapp/js/list';
import store from './store'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

Vue.config.productionTip = false

Vue.use(vmLayout)
Vue.use(vmButton)
Vue.use(vmIcon)
Vue.use(list);
Vue.use(globalComponents);

Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'break-lines': 80,
    'remove-initial-line-feed': false,
    'tabs-to-spaces': 4
    // 'spaces-to-tabs': 4
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
