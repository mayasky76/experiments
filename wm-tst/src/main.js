import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Storage from "vue-ls"
Vue.use(Storage);
Vue.config.productionTip = false
import db from "./DexieDB";
import {
    uuid
} from 'vue-uuid';


new Vue({
    router,
    store,
    data() {
        return {
            uuid,
            db,
            // this changes when the localstorage changes so it can be used to communicate window to window!
            counter: 0,
            // these are WINDOW specific bits of Data - not to be saved for reuse
            window_UUID: null,
            ProjectData: null,
            navigation: {
                section: ''
            },

            /* This can be */
            system: {
                navBar: true,
                writer: {
                    sidebarVisible: true,
                    selectedElement: null,
                    selectedElementParent: null,
                    selectedElementParentIndex: null,
                    elements: []
                }
            }
        }
    },

    created: function() {
        this.counter = this.$ls.get('counter', 0);
        var _this = this;
        this.$ls.on('counter', function(val) {
            _this.counter = val;
        });
    },
    watch: {
        counter: function(val) {
            this.$ls.set('counter', val)
        }
    },
    methods: {
        increment: function() {
            this.counter++;
        },

        decrement: function() {
            this.counter--;
        },
        savetool(tool) {
            let data = {};
            data.id = 1;
            data.state = JSON.stringify(this.system[tool]);
            data.lastupdated = Date.now();
            this.db[tool].put(data).then(updated => {
                if (updated) {
                    console.log("Saved", data)
                } else {
                    console.log("Failed", data)
                }
            });
        },
        loadtool(tool) {
            let searchObj = {};
            searchObj.id = 1;
            this.db[tool].get(searchObj)
                .then(result => {
                    return result;
                })
                .then(data => {
                    if (data) {
                        console.log("loaded", data)
                        this.system[tool] = JSON.parse(data.state)
                    } else {
                        console.log("failed load", data)
                    }
                });
        }
    },
    render: h => h(App)
}).$mount('#app')