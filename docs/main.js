// import 'normalize-css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vant from 'vant';
import 'vant/lib/index.css';
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
let vConsole = new VConsole() // 初始化

Vue.use(Vant);
import { Popup } from 'vant';

Vue.use(Popup);
// import { format, mergeDocs } from './docs-formatter';

// require the docs file which contains all the information
// const docs = require('!!./docs-loader!../vue-tags-input/vue-tags-input.js');
//
// // we require the props file extra and merge it later,
// // then the webpack "browser reload on file change" works with this file, too
// const props = require('!!./docs-loader!../vue-tags-input/vue-tags-input.props.js');

// const merged = mergeDocs(props, docs);
// window.docs = format(merged);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
