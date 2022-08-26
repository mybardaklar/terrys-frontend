<script>
import CartDrawerNavigation from '~/components/CartDrawerNavigation/CartDrawerNavigation.vue';
import MobileBottomSheet from '~/components/MobileBottomSheet/MobileBottomSheet.vue';
import UserModal from '~/components/UserModal/UserModal.vue';
import MainHeader from '~/components/MainHeader/MainHeader.vue';
import MainFooter from '~/components/MainFooter/MainFooter.vue';

export default {
  components: { CartDrawerNavigation, MobileBottomSheet, UserModal, MainHeader, MainFooter },
  mounted() {
    if (this.getCart.order_status === 'closed') {
      this.resetCart();
    }
  }
};
</script>

<template>
  <VApp>
    <CartDrawerNavigation />
    <MobileBottomSheet />
    <UserModal />
    <MainHeader />

    <VMain>
      <div class="mainContent">
        <VContainer>
          <Nuxt />
          <MainFooter />
        </VContainer>
      </div>
    </VMain>
  </VApp>
</template>

<style lang="scss" scoped>
.mainContent {
  background-color: #f7f7f7;
  padding: 20px 0;
}
</style>
