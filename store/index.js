export const state = () => ({
  cartDrawerNav: false,
  mobileBottomSheet: false,
  userModal: {
    active: false,
    type: ''
  },
  apiToken: '',
  user: {},
  cart: {}
});

export const mutations = {
  SET_CART_DRAWER_NAV(state, value) {
    state.cartDrawerNav = value;
  },

  SET_MOBILE_BOTTOM_SHEET(state, value) {
    state.mobileBottomSheet = value;
  },

  SET_USER_MODAL(state, value) {
    state.userModal = value;
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

    vuexContext.commit('SET_API_TOKEN', CNF.data.accessToken);
  },

  setCartDrawerNav({ commit }, newValue) {
    commit('SET_CART_DRAWER_NAV', newValue);
  },

  setMobileBottomSheet({ commit }, newValue) {
    commit('SET_MOBILE_BOTTOM_SHEET', newValue);
  },

  setUserModal({ commit }, newValue) {
    commit('SET_USER_MODAL', newValue);
  }
};

export const getters = {
  getCartDrawerNav: (state) => {
    return state.cartDrawerNav;
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
