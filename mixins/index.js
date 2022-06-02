import { mapGetters, mapActions } from 'vuex';

const mixin = {
  computed: {
    ...mapGetters(['getCartDrawerNav', 'getMobileBottomSheet'])
  },
  methods: {
    ...mapActions(['setCartDrawerNav', 'setMobileBottomSheet'])
  }
};

export default mixin;
