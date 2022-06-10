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
            <strong class="font-weight-black">4 items</strong> in your cart
          </div>
          <VDivider></VDivider>
        </VFlex>

        <VFlex fill-height>
          <VLayout column fill-height>
            <VFlex fill-height>
              <VList three-line>
                <div v-for="(product, index) in cart" :key="index">
                  <div>
                    <CartDrawerNavProduct
                      :key="index"
                      :img="product.img"
                      :title="product.title"
                      :type="product.type"
                      :price="product.price"
                      :pcs="product.pcs"
                      :extras="product.extras" />
                    <VDivider></VDivider>
                  </div>
                </div>
              </VList>
            </VFlex>
            <VFlex>
              <VContainer>
                <VBtn color="green" block depressed dark>Checkout</VBtn>
              </VContainer>
            </VFlex>
          </VLayout>
        </VFlex>
      </VLayout>
    </VCard>
  </VNavigationDrawer>
</template>
