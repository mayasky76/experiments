import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Storage from "vue-ls"
Vue.use(Storage);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    data() {
        return {
            // this changes when the localstorage changes so it can be used to communicate window to window!
            counter: 0,
            // these are WINDOW specific bits of Data - not to be saved for reuse
            window_UUID: null,
            ProjectData: null,
            navigation: {
                section: ''
            },
            /* This can be */
            system: {},
            elements: [{
                    id: 1,
                    name: "Shrek",
                    elements: []
                },
                {
                    id: 2,
                    name: "Fiona",
                    elements: [{
                            id: 4,
                            name: "Lord Farquad",
                            elements: []
                        },
                        {
                            id: 5,
                            name: "Prince Charming",
                            elements: []
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Donkey",
                    elements: []
                }
            ]
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
        }
    },
    render: h => h(App)
}).$mount('#app')