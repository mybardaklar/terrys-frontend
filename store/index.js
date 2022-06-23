import { uuid } from 'vue-uuid';

export const state = () => ({
  devId: null,
  cartDrawerNav: false,
  mobileBottomSheet: false,
  userModal: {
    active: false,
    type: ''
  },
  apiToken: '',
  user: {},
  cart: {
    id: null,
    order_id: null,
    order_tag: 'new_order',
    order_status: 'open',
    details: {
      total_price: 0,
      price: 0,
      discount_code: '',
      discount_percent: 0,
      total_discount_price: 0,
      product_count: 0,
      tax_rate: 7,
      total_tax: 7,
      service_fee: 14
    },
    customerId: null,
    bankId: null,
    order_details: []
  }
});

export const mutations = {
  SET_DEV_ID(state, value) {
    state.devId = value;
    state.cart = { ...state.cart, devId: value };
  },

  SET_CART_DRAWER_NAV(state, value) {
    state.cartDrawerNav = value;
  },

  SET_MOBILE_BOTTOM_SHEET(state, value) {
    state.mobileBottomSheet = value;
  },

  SET_USER_MODAL(state, value) {
    state.userModal = value;
  },

  SET_CART_ITEM(state, value) {
    state.cart.order_details.push(value);
  },

  DELETE_CART_ITEM(state, value) {
    state.cart.order_details = state.cart.order_details.filter((item, index) => index !== value);
  },

  SET_CART_DETAIL(state, value) {
    let cartDetails = { ...state.cart.details };

    cartDetails = { ...cartDetails, ...value };

    state.cart.details = cartDetails;
  },

  SET_API_TOKEN(state, value) {
    state.apiToken = value;
  }
};

export const actions = {
  async nuxtServerInit(vuexContext, nuxtContext) {
    const CNF = await nuxtContext.app.$axios.get('/auth/ghost', {
      host: nuxtContext.req.headers.host
    });

    if (!vuexContext.state.devId) {
      vuexContext.commit('SET_DEV_ID', uuid.v4());
    }

    vuexContext.commit('SET_API_TOKEN', CNF.data.accessToken);
  },

  setCartDrawerNav({ commit }, newValue) {
    commit('SET_CART_DRAWER_NAV', newValue);
  },

  setMobileBottomSheet({ commit }, newValue) {
    commit('SET_MOBILE_BOTTOM_SHEET', newValue);
  },

  setCartItem({ commit }, newValue) {
    commit('SET_CART_ITEM', newValue);
  },

  deleteCartItem({ commit }, newValue) {
    commit('DELETE_CART_ITEM', newValue);
  },

  setCartDetail({ commit }, newValue) {
    commit('SET_CART_DETAIL', newValue);
  },

  setUserModal({ commit }, newValue) {
    commit('SET_USER_MODAL', newValue);
  }
};

export const getters = {
  getCartDrawerNav: (state) => {
    return state.cartDrawerNav;
  },

  getCartOrderDetails(state) {
    return state.cart.order_details;
  },

  getCartDetails(state) {
    return state.cart.details;
  },

  getTotalPrice(state) {
    const cartDetails = { ...state.cart.details };

    state.cart.order_details.map((item) => {
      /* let totalAddonsPrice = 0;

      item.addons.map((item) => {
        return item;
      });

      cartDetails.total_price += item.productPrice + totalAddonsPrice; */
      cartDetails.total_price += item.details.productDetails.productPrice;

      return item;
    });

    return cartDetails.total_price;
  },

  getMobileBottomSheet: (state) => {
    return state.mobileBottomSheet;
  },

  getUserModal: (state) => {
    return state.userModal;
  },

  getApiToken: (state) => {
    return state.apiToken;
  }
};
