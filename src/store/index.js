import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { orderDeatils } from "@/utils/order-details";

export default new Vuex.Store({
  state: {
    orderDetails: orderDeatils
  },
  getters: {
    orderDetails: (state) => {
      return state.orderDetails;
    }
  },
  actions: {
    changeOrderStatus({ commit }, index) {
      commit("OnChangeOrderStatus", index);
    }
  },
  mutations: {
    /**
     * 
     * @param {*} state 
     * @param {*} index 
     * function to change the order status
     */
    OnChangeOrderStatus(state, index) {
      let orderDeatils = state.orderDetails
      let currentOrder = orderDeatils[index]
      if(currentOrder.status == 'Received'){
        currentOrder.status = 'Preparing'
      }
      else if(currentOrder.status == 'Preparing'){
        currentOrder.status = 'Ready to serve'
      }
      else if(currentOrder.status == 'Ready to serve'){
        currentOrder.status = 'Delivered'
      }
      orderDeatils[index] = currentOrder
      state.orderDetails =orderDeatils
    }
  },
  modules: {}
});
