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
  user: {
    details: {
      addressInformation: {}
    }
  },
  checkoutStep: 1,
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
      service_fee: 15,
      customerTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone
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

  SET_CART_CUSTOMER(state, value) {
    state.cart.customerId = value;
  },

  SET_API_TOKEN(state, value) {
    state.apiToken = value;
  },

  SET_CHECKOUT_STEP(state, value) {
    state.checkoutStep = value;
  },

  SET_CUSTOMER_ID(state, value) {
    state.cart.customerId = value;
  },

  SET_USER(state, value) {
    Object.assign(state.user, value);
  },

  SIGN_OUT_USER(state, value) {
    delete state.user.accessToken;
    delete state.user.customer;
  },

  UPDATE_USER(state, value) {
    switch (value.key) {
      case 'city':
      case 'state':
      case 'zipcode':
      case 'address1':
      case 'address2':
        state.user.details.addressInformation[value.key] = value.value;
        break;

      default:
        state.user[value.key] = value.value;
        break;
    }
  },

  UPDATE_ORDER_DELIVERY(state, value) {
    state.cart.order_details[value.index].delivery[value.key] = value.value;
  },

  SET_ALL_DELIVERIES_SAME_ADDRESS(state, value) {
    const orderDetils = state.cart.order_details.map((item, index) => {
      if (index !== 0) {
        item.delivery = value;
      }

      return item;
    });

    state.cart.order_details = orderDetils;
  },

  SET_ORDER_ZIPCODE(state, obj) {
    state.cart.order_details[obj.index].details.timezone = { ...obj.timezone };
    state.cart.order_details[obj.index].delivery.state = obj.timezone.state;
  },

  SET_ORDER_DELIVERY_DATE(state, obj) {
    state.cart.order_details[obj.index].delivery_date = obj.date;
  },

  SET_TOTAL_PRICE(state) {
    // const cartDetails = { ...state.cart.details };
    let cartSubtotal = 0;

    state.cart.order_details.map((item) => {
      /* let totalAddonsPrice = 0;

      item.addons.map((item) => {
        return item;
      });

      cartDetails.total_price += item.productPrice + totalAddonsPrice; */
      cartSubtotal += item.details.productDetails.productPrice;

      return item;
    });

    // calculating subtotal price
    state.cart.details.price = cartSubtotal;

    // calculating total price
    state.cart.details.total_price =
      (cartSubtotal / 100) * state.cart.details.service_fee + cartSubtotal;
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

  setCartCustomer({ commit }, newValue) {
    commit('SET_CART_CUSTOMER', newValue);
  },

  setUserModal({ commit }, newValue) {
    commit('SET_USER_MODAL', newValue);
  },

  setCheckoutStep({ commit }, newValue) {
    commit('SET_CHECKOUT_STEP', newValue);
  },

  setUser({ commit }, newValue) {
    commit('SET_USER', newValue);
  },

  signOutUser({ commit }) {
    commit('SIGN_OUT_USER');
  },

  updateUser({ commit }, newValue) {
    commit('UPDATE_USER', newValue);
  },

  setCustomerId({ commit }, newValue) {
    commit('SET_CUSTOMER_ID', newValue);
  },

  updateOrderDelivery({ commit }, newValue) {
    commit('UPDATE_ORDER_DELIVERY', newValue);
  },

  setAllDeliveriesSameAddress({ commit }, newValue) {
    commit('SET_ALL_DELIVERIES_SAME_ADDRESS', newValue);
  },

  setOrderZipCode({ commit }, newValue) {
    commit('SET_ORDER_ZIPCODE', newValue);
  },

  setOrderDeliveryDate({ commit }, newValue) {
    commit('SET_ORDER_DELIVERY_DATE', newValue);
  },

  setTotalPrice({ commit }) {
    commit('SET_TOTAL_PRICE');
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

  getCartCustomer(state) {
    return state.cart.customerId;
  },

  getSubtotalPrice(state) {
    return state.cart.details.price;
  },

  getTotalPrice(state) {
    return state.cart.details.total_price;
  },

  getMobileBottomSheet: (state) => {
    return state.mobileBottomSheet;
  },

  getUserModal: (state) => {
    return state.userModal;
  },

  getApiToken: (state) => {
    return state.apiToken;
  },

  getCheckoutStep: (state) => {
    return state.checkoutStep;
  },

  getUser: (state) => {
    return state.user;
  }
};
