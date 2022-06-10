import { mapGetters, mapActions } from 'vuex';

const mixin = {
  computed: {
    ...mapGetters(['getCartDrawerNav', 'getMobileBottomSheet', 'getUserModal'])
  },
  methods: {
    ...mapActions(['setCartDrawerNav', 'setMobileBottomSheet', 'setUserModal'])
  }
};

export default mixin;
