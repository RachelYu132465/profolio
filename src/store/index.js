import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "charity funding activity",
        image:
"https://www.linkpicture.com/q/2_297.png",        price: 340,
      },

      {
        id: 2,
        name: "international workshop activity",
        image:
          "https://www.linkpicture.com/q/DSC_0358.jpg",
        price: 500,
      },

      {
        id: 3,
        name: "commercial photography",
        image:
          "https://www.linkpicture.com/q/天然拾味系列2.jpg",
        price: 600,
      },

      
    ],

    StoreCart: [],
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart,
  },

  mutations: {
    ADD_Item(state, id) {
      state.StoreCart.push(id);
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    },
  },
  actions: {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    },
  },
  modules: {},
});