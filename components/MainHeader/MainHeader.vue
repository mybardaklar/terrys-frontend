<script src="./MainHeader.js"></script>

<template>
  <VAppBar color="white" class="mainHeader" height="80" elevate-on-scroll app>
    <div class="mainHeader__start">
      <NuxtLink to="/" class="mainHeader__logo">
        <img src="/images/logo.webp" alt="" />
      </NuxtLink>
      <VBtn icon class="d-lg-none" @click="setMobileBottomSheet(true)">
        <VIcon>fas fa-bars</VIcon>
      </VBtn>
      <MainNavbar />
    </div>

    <VSpacer></VSpacer>

    <div class="mainHeader__end">
      <div class="d-none d-md-block">
        <VIcon>fas fa-square-phone</VIcon>
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
            <VBadge
              :content="getCartOrderDetails.length > 0 ? getCartOrderDetails.length : '0'"
              color="green"
              offset-x="4"
              bordered
              overlap>
              <VIcon>fas fa-cart-shopping</VIcon>
            </VBadge>
          </VBtn>
        </template>
        <span>Shopping Cart</span>
      </VTooltip>

      <VMenu transition="slide-y-transition" bottom offset-y>
        <template #activator="{ on: menuOn, attrs: menuAttrs }">
          <VTooltip bottom>
            <template #activator="{ on: tooltipOn }">
              <VBtn
                icon
                class="mainHeader__cart"
                v-bind="menuAttrs"
                v-on="{ ...menuOn, ...tooltipOn }">
                <VIcon>fas fa-user</VIcon>
              </VBtn>
            </template>
            <span>Sign in/Sign up</span>
          </VTooltip>
        </template>

        <VList width="200" dense>
          <VListItem @click="setUserModal({ active: true, type: 'sign_in' })">
            <VListItemIcon class="mr-2">
              <VIcon size="16">fas fa-arrow-right-to-bracket</VIcon>
            </VListItemIcon>
            <VListItemContent>
              <VListItemTitle>Sign in</VListItemTitle>
            </VListItemContent>
          </VListItem>

          <VListItem @click="setUserModal({ active: true, type: 'sign_up' })">
            <VListItemIcon class="mr-2">
              <VIcon size="16">fas fa-user-plus</VIcon>
            </VListItemIcon>
            <VListItemContent>
              <VListItemTitle>Sign up</VListItemTitle>
            </VListItemContent>
          </VListItem>
        </VList>
      </VMenu>
    </div>
  </VAppBar>
</template>

<style lang="scss" src="./MainHeader.scss" scoped></style>
