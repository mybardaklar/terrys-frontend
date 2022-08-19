import MainNavbar from '~/components/MainNavbar/MainNavbar.vue';

export default {
  components: { MainNavbar },

  methods: {
    signOutMethod() {
      this.signOutUser();
      this.setCartCustomer(null);
      window.location.reload(true);
    }
  }
};
