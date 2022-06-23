import { mapGetters, mapActions } from 'vuex';

const mixin = {
  computed: {
    ...mapGetters([
      'getCartDrawerNav',
      'getCartOrderDetails',
      'getCartDetails',
      'getMobileBottomSheet',
      'getUserModal',
      'getTotalPrice'
    ])
  },

  methods: {
    ...mapActions([
      'setCartDrawerNav',
      'setMobileBottomSheet',
      'setUserModal',
      'setCartItem',
      'deleteCartItem',
      'setCartDetail'
    ])
  }
};

export default mixin;
