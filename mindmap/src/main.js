import 'babel-polyfill';

import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VDragged from "v-dragged";
import TextareaAutosize from "vue-textarea-autosize";
import UUID from "vue-uuid";
import VueHtml2Canvas from "vue-html2canvas";
import './registerServiceWorker'

Vue.use(VueHtml2Canvas);
Vue.use(UUID);
Vue.use(VDragged);
Vue.use(TextareaAutosize);
Vue.config.productionTip = false;

new Vue({
    store,
    beforeCreate() {
        this.$store.commit("initialiseStore");
    },
    render: h => h(App)
}).$mount("#app");