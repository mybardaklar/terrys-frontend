<script src="./MainHeader.js"></script>

<template>
  <VAppBar color="white" class="mainHeader" height="80" elevate-on-scroll app>
    <div class="mainHeader__start">
      <NuxtLink to="/" class="mainHeader__logo">
        <img src="/images/logo.webp" alt="" />
      </NuxtLink>
      <VBtn icon class="d-lg-none" @click="setMobileBottomSheet(true)">
        <v-icon>fas fa-bars</v-icon>
      </VBtn>
      <MainNavbar />
    </div>

    <VSpacer></VSpacer>

    <div class="mainHeader__end">
      <div class="d-none d-md-block">
        <v-icon>fas fa-square-phone</v-icon>
        <strong>Call Us:</strong>
        <span>(888) 507-9738</span>
      </div>
      <VTooltip bottom>
        <template #activator="{ on, attrs }">
          <VBtn
            icon
            class="mainHeader__cart"
            v-bind="attrs"
            @click="setCartDrawerNav(true)"
            v-on="on">
            <VBadge content="0" color="green" offset-x="4" bordered overlap>
              <v-icon>fas fa-cart-shopping</v-icon>
            </VBadge>
          </VBtn>
        </template>
        <span>Shopping Cart</span>
      </VTooltip>
    </div>
  </VAppBar>
</template>

<style lang="scss" src="./MainHeader.scss" scoped></style>
