import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		server:config.server
	}
})