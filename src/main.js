import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap-vue'

// import 'bootstrap';
// import './assets/styles.scss';
// import 'bootstrap/dist/css/bootstrap.css'


import './icons/faIcons'


Vue.use(bootstrap);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
