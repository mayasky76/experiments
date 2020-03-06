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
            SyncWindows: 0,
            // these are WINDOW specific bits of Data - not to be saved for reuse
            window_UUID: null,
            ProjectData: null,
            navigation: {
                section: ''
            },
            system: {
                navBar: true,
                card: null,
                writer: {
                    sidebarVisible: true,
                    selectedElement: null,
                    selectedElementParent: null,
                    selectedElementParentIndex: null,
                    elements: []
                },
                snowflake: {
                    currentSnowflake: null,
                    snowflakeList: null,
                    elements: null
                }
            }
        }
    },

    created: function() {
        this.SyncWindows = this.$ls.get('SyncWindows', 0);
        var _this = this;
        this.$ls.on('SyncWindows', function(val) {
            _this.SyncWindows = val;
        });

    },
    watch: {
        SyncWindows(val) {
            if (val.src != this.window_UUID) {
                // apply the load if the chage is NOT from the current window
                if (val.table === "card") {
                    if (this.system.card) {
                        if (val.uuid === this.system.card.uuid) {
                            // only run if the current cad is the one updated
                            this.loadCard(val.uuid, true)
                        }
                    }
                } else {
                    this.loadtool(val.table, null, true)
                }
            }
            this.$ls.set('SyncWindows', val)
        }
    },
    methods: {
        WindowTrigger: function(table, uuid) {
            /*
            OK this needs to do a bit of work
            1.             
            */
            let obj = {
                id: this.uuid.v1(),
                src: this.window_UUID,
            }
            obj.table = table
            if (uuid) {
                obj.uuid = uuid
            }
            this.SyncWindows = obj
        },
        savetool(tool, uuid) {
            let data = {};
            if (uuid) {
                data.uuid = uuid
            }
            data.state = this.system[tool].elements;
            data.lastupdated = Date.now();
            let myDB = this.db.tools
            if (tool === "writer") {
                data.id = 1
                myDB = this.db.writer
            }
            myDB.put(data).then(updated => {
                if (updated) {
                    // console.log("Saved", data)
                    this.WindowTrigger(tool, uuid)
                } else {
                    //  console.log("Failed", data)
                }
            });
        },
        loadtool(tool, uuid, doupdate) {
            //  console.log("Load Triggered", tool)
            // goddam this is going to be a mess - will need to tuidy up
            let searchObj = {};
            if (uuid) {
                searchObj.uuid = uuid
            }
            let myDB = this.db.tools
            if (tool === "writer") {
                searchObj.id = 1
                myDB = this.db.writer
            } else {
                searchObj.tool = tool
            }
            myDB.get(searchObj)
                .then(result => {
                    return result;
                })
                .then(data => {
                    if (data) {
                        // console.log("loaded", data)
                        if (tool === "writer") {
                            this.system[tool].elements = data.state
                        } else {
                            this.system[tool] = data
                            console.log("loaded : ", tool, data)
                        }
                        if (doupdate) {
                            this.$forceUpdate;
                        }
                    } else {
                        //  console.log("failed load", data)
                    }
                });
        },
        loadCard(uuid, doupdate) {
            this.system.card = null;
            console.log("Card hunting", uuid)
            let searchObj = {}
            searchObj.uuid = uuid
            this.db.cards.get(searchObj)
                .then(result => {
                    return result;
                })
                .then(data => {
                    if (data) {
                        console.log("loaded", data)
                        this.system.card = data
                        if (doupdate) {
                            this.$forceUpdate;
                        }
                    } else {
                        console.log("failed load", data)
                            // empty card - create a new object for it
                        this.system.card = {
                            uuid: uuid
                        }
                    }
                });
        },
        saveCard(card) {
            this.db.cards.put(card).then(updated => {
                if (updated) {
                    // console.log("Saved", data)
                    this.WindowTrigger("card", card.uuid)
                } else {
                    //  console.log("Failed", data)
                }
            });
        }

    },
    render: h => h(App)
}).$mount('#app')