import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    data() {
        return {
            // these are WINDOW specific bits of Data - not to be saved for reuse
            window_UUID: null,
            ProjectData: null,
            navigation: {
                section: ''
            },
            /* This can be */
            system: {}

        }
    },
    render: h => h(App)
}).$mount('#app')