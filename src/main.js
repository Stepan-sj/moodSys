import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'lib-flexible'
import 'normalize.css/normalize.css'
import './styles/index.scss'
import 'vant/lib/index.css'
Vue.config.productionTip = false
Vue.use(Vant);

window.onresize = () => {
  alert(document.documentElement.clientHeight)
};


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
