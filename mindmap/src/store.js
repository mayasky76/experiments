import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "vue-uuid";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BoardData: {},
    LinkData: {}
  },
  mutations: {
    AddBoardItem: (state, _value) => {
      var newUUid = uuid.v1();
      _value.uuid = newUUid;
      _value.links = []; // add the links array
      var pushObj = {};
      pushObj[newUUid] = _value;
      Vue.set(state.BoardData, newUUid, _value);
      //  state.BoardData.push(pushObj); // needed to trigger the reactivity
      console.log(state.BoardData);
      localStorage.setItem("store", JSON.stringify(state));
    },
    AddLink: (state, _value) => {
      var newUUid = uuid.v1();
      var pushObj = {};
      pushObj[newUUid] = _value;
      Vue.set(state.LinkData, newUUid, _value);
      state.BoardData[_value.start].links.push(newUUid);
      state.BoardData[_value.end].links.push(newUUid);
      //  state.BoardData.push(pushObj); // needed to trigger the reactivity
      localStorage.setItem("store", JSON.stringify(state));
    },
    ClearAllData: (state) => {
      state.BoardData={}
      state.LinkData={}
      //  state.BoardData.push(pushObj); // needed to trigger the reactivity
      localStorage.setItem("store", JSON.stringify(state));
    },

    UpdateBoardItem: (state, payload) => {
      state.BoardData[payload.uuid] = payload;
      localStorage.setItem("store", JSON.stringify(state));
    },
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("store")) {
        // Replace the state object with the stored item
        console.log("loading");
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    }
  },
  actions: {}
});
