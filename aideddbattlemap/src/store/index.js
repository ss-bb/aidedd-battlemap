import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentLayoutName: "battlemap",
        isMD: false
    },
    mutations: {
        setCurrentLayout(state, value) {
            state.currentLayoutName = value;
        },
        isMD(state, value) {
            state.isMD = value;
        },
    },
    actions: {
        updateCurrentLayout(state, value) {
            //make a call to back here
            //get result into some variable
            state.commit("setCurrentLayout", value);
        }
    },
    modules: {}
});