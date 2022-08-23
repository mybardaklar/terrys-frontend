<script src="./CartDrawerNavigation.js"></script>

<template>
  <VNavigationDrawer
    width="360"
    fixed
    temporary
    right
    :value="getCartDrawerNav"
    @input="setCartDrawerNav">
    <VCard elevation="0" height="100%" tile>
      <VLayout column fill-height>
        <VFlex>
          <VToolbar color="green" flat dark>
            <VBtn icon class="hidden-xs-only" @click="setCartDrawerNav(false)">
              <VIcon>fas fa-xmark</VIcon>
            </VBtn>
            <VToolbarTitle>Shopping Cart</VToolbarTitle>
          </VToolbar>

          <div class="text-subtitle-2 pa-3 text-uppercase">
            <strong class="font-weight-black">
              <span
                v-text="getCartOrderDetails.length > 0 ? getCartOrderDetails.length : '0'"></span>
              items
            </strong>
            in your cart
          </div>
          <VDivider />
        </VFlex>

        <VFlex fill-height>
          <VLayout column fill-height>
            <VFlex fill-height>
              <VList three-line>
                <div v-for="(detail, index) in getCartOrderDetails" :key="index">
                  <div>
                    <CartDrawerNavProduct
                      :key="detail.product.id"
                      :img="detail.product.url"
                      :title="detail.product.name"
                      :type="detail.details.productDetails.skuName"
                      :price="detail.details.productDetails.productPrice"
                      :extras="detail.details.productDetails.addons"
                      :item-index="index" />
                    <VDivider />
                  </div>
                </div>
              </VList>
            </VFlex>
            <VFlex>
              <VContainer>
                <VBtn color="green" block depressed dark @click="$router.push('/checkout')">
                  Checkout
                </VBtn>
              </VContainer>
            </VFlex>
          </VLayout>
        </VFlex>
      </VLayout>
    </VCard>
  </VNavigationDrawer>
</template>
