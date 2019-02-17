import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import action from "./vuex/actions";
import mutations from "./vuex/mutations";
import state from "./vuex/state";

export default new Vuex.Store({
  state: Object.assign({}, state),
  mutations: Object.assign({}, mutations),
  actions: Object.assign({}, action),
});
