import Vue from 'vue'
import App from '../../components/login/Login.vue'
// import store from '../../store/list.js'
Vue.config.productionTip = false
new Vue({
	el: '#app',
	// store,
	template: '<App/>',
	components: { App }
})