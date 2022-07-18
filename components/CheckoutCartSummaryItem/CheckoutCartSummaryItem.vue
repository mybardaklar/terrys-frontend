<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    extras: {
      type: Array,
      default: () => {
        return [];
      }
    },
    itemIndex: {
      type: Number,
      required: true
    }
  },

  methods: {
    deleteItem() {
      this.deleteCartItem(this.itemIndex);
      this.setTotalPrice();
    }
  }
};
</script>

<template>
  <div>
    <VRow>
      <VCol cols="3" class="black--text">
        <VImg :src="img"></VImg>
      </VCol>
      <VCol cols="6">
        <VListItemContent>
          <VListItemTitle class="black--text" v-text="title"></VListItemTitle>
          <VListItemSubtitle v-text="type"></VListItemSubtitle>
          <div class="text-caption mt-1 black--text" style="line-height: 1.4">
            <div v-for="(extra, index) in extras" :key="index" class="mt-1">
              <div>
                <strong v-text="extra.addOnOptions[0].name"></strong>
                <span v-text="`(${extra.addOnName})`"></span>
              </div>
              <strong class="d-block pink--text">
                <span v-text="extra.addOnOptions[0].price"></span>
              </strong>
            </div>
          </div>
        </VListItemContent>
      </VCol>
      <VCol cols="3" class="text-right align-self-center">
        <VBtn icon text large @click="deleteItem()">
          <VIcon size="20">fas fa-times</VIcon>
        </VBtn>
      </VCol>
    </VRow>

    <VRow align="center" class="mt-1" no-gutters>
      <VCol cols="6" class="text-subtitle-2">Subtotal</VCol>
      <VCol cols="6" class="text-right font-weight-bold">
        <div class="text-h6 pink--text">
          $<span v-text="(Math.floor(price * 100) / 100).toFixed(2)"></span>
        </div>
      </VCol>
    </VRow>

    <VRow align="center" class="mt-1" no-gutters>
      <VCol cols="6" class="text-subtitle-2">Your Saving</VCol>
      <VCol cols="6" class="text-right text-subtitle-1 font-weight-bold">-$0</VCol>
    </VRow>

    <VRow align="center" class="mt-1" no-gutters>
      <VCol cols="6" class="text-subtitle-2">
        <span>Discount Coupon</span>
      </VCol>
      <VCol cols="6" class="text-right text-subtitle-1 font-weight-bold">$0</VCol>
    </VRow>

    <VBtn color="green" class="ml-n3" plain text small>Remove</VBtn>
  </div>
</template>
