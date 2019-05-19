import Vue from '../node_modules/vue/dist/vue.js' //es6 Module的模块导入

import App from './App.js'
new Vue({
	el:"#app",
	components:{
		App
	},
	template:"<App/>"
})