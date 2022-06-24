<script>
import CheckoutCartSummaryItem from '~/components/CheckoutCartSummaryItem/CheckoutCartSummaryItem.vue';

export default {
  components: { CheckoutCartSummaryItem },
  data: () => ({
    isActive: true
  })
};
</script>

<template>
  <VCard outlined>
    <VCardTitle class="d-flex justify-space-between cursor-pointer" @click="isActive = !isActive">
      <span class="text-subtitle-1 font-weight-bold">Cart Summary</span>
      <VIcon
        class="black--text"
        size="16"
        v-text="isActive ? 'fas fa-caret-up' : 'fas fa-caret-down'"></VIcon>
    </VCardTitle>

    <VCardText v-show="isActive">
      <div v-for="(detail, index) in getCartOrderDetails" :key="index">
        <div>
          <CheckoutCartSummaryItem
            :key="detail.product.id"
            :img="detail.product.url"
            :title="detail.product.name"
            :type="detail.product.sku_type"
            :price="detail.details.productDetails.productPrice"
            :extras="detail.details.productDetails.addons"
            :item-index="index" />
          <VDivider v-if="index < getCartOrderDetails.length - 1" class="my-5"></VDivider>
        </div>
      </div>

      <VRow align="center" class="mt-8">
        <VCol cols="6" class="text-subtitle-1">Shipping</VCol>
        <VCol cols="6" class="text-right text-subtitle-1 font-weight-bold">$0.00</VCol>
      </VRow>
      <VDivider class="my-2"></VDivider>
      <VRow align="center" class="black--text">
        <VCol cols="6" class="text-subtitle-1">Total</VCol>
        <VCol cols="6" class="text-right text-subtitle-1 font-weight-bold">
          ${{ (Math.floor(getTotalPrice * 100) / 100).toFixed(2) }}
        </VCol>
      </VRow>

      <div class="mt-8">
        <!-- <VCheckbox input-value="true" color="green">
          <template #label>
            <div class="text-body-2">
              Please check to acknowledge our
              <NuxtLink to="/">Privacy &amp; Terms Policy</NuxtLink>.
            </div>
          </template>
        </VCheckbox> -->

        <VBtn color="green" elevation="0" block dark>
          Pay <strong>${{ (Math.floor(getTotalPrice * 100) / 100).toFixed(2) }}</strong>
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.cursor-pointer {
  cursor: pointer;
  user-select: none;
}
</style>
