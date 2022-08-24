<script>
import CartDrawerNavigation from '~/components/CartDrawerNavigation/CartDrawerNavigation.vue';
import MobileBottomSheet from '~/components/MobileBottomSheet/MobileBottomSheet.vue';
import UserModal from '~/components/UserModal/UserModal.vue';
import MainHeader from '~/components/MainHeader/MainHeader.vue';
import FixedContainer from '~/components/FixedContainer/FixedContainer.vue';
import MainFooter from '~/components/MainFooter/MainFooter.vue';

export default {
  components: {
    CartDrawerNavigation,
    MobileBottomSheet,
    UserModal,
    MainHeader,
    FixedContainer,
    MainFooter
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
      <FixedContainer />
      <div class="mainContent">
        <Nuxt />
        <MainFooter />
      </div>
    </VMain>
  </VApp>
</template>

<style lang="scss" scoped>
.mainContent {
  width: 100%;
  max-width: calc(100% - 768px);
  background-color: #f7f7f7;
  padding: 20px;
  min-height: 100%;

  @media only screen and (max-width: 1599px) {
    max-width: 50%;
  }

  @media only screen and (max-width: 1903px) {
    max-width: none;
  }
}
</style>
