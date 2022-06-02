export const state = () => ({
  cartDrawerNav: false,
  mobileBottomSheet: false
});

export const mutations = {
  SET_CART_DRAWER_NAV(state, value) {
    state.cartDrawerNav = value;
  },
  SET_MOBILE_BOTTOM_SHEET(state, value) {
    state.mobileBottomSheet = value;
  }
};

export const actions = {
  setCartDrawerNav({ commit }, newValue) {
    commit('SET_CART_DRAWER_NAV', newValue);
  },
  setMobileBottomSheet({ commit }, newValue) {
    commit('SET_MOBILE_BOTTOM_SHEET', newValue);
  }
};

export const getters = {
  getCartDrawerNav: (state) => {
    return state.cartDrawerNav;
  },
  getMobileBottomSheet: (state) => {
    return state.mobileBottomSheet;
  }
};
