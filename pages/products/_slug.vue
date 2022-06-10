<script>
export default {
  layout: 'productDetail',

  async asyncData({ $axios, route }) {
    if (route.params.slug !== undefined) {
      const product = await $axios.$get(`/api/products/${encodeURIComponent(route.params.slug)}`);

      return { selectedSkuId: product.sku_id_to_select, product };
    }
  },

  data: () => ({})
};
</script>

<template>
  <div>
    <VRow>
      <VCol cols="3">
        <VCard outlined>
          <VImg :src="product.sku_types.find((sku) => sku.skuId === selectedSkuId).image"></VImg>
        </VCard>
      </VCol>

      <VCol cols="9">
        <h6 class="text-overline font-weight-medium text--disabled">
          <span>BF82-11KS</span>
          <VTooltip right>
            <template #activator="{ on, attrs }">
              <VIcon size="16" v-bind="attrs" v-on="on">fas fa-circle-question</VIcon>
            </template>
            <span>Item No. BF82-11KS</span>
          </VTooltip>
        </h6>
        <h1 class="text-h4 font-weight-medium" v-text="product.img_alt_text"></h1>

        <div class="mt-6">
          <div class="text-subtitle-1 font-weight-bold mb-2">Upgrade your bouquet</div>
          <VRadioGroup v-model="selectedSkuId" hide-details="auto" class="my-0" row>
            <VRow>
              <VCol v-for="sku in product.sku_types" :key="sku.skuId" cols="3">
                <VCard class="pl-4" outlined>
                  <VRadio :value="sku.skuId" class="mr-0">
                    <template #label>
                      <VContainer class="py-4 pr-4" fluid>
                        <div>
                          <span v-text="sku.skuTypeName"></span>
                          <strong
                            class="pink--text"
                            v-text="product.prices[sku.skuId].price"></strong>
                        </div>
                      </VContainer>
                    </template>
                  </VRadio>
                </VCard>
              </VCol>
            </VRow>
          </VRadioGroup>
        </div>

        <div class="mt-6">
          <div class="text-subtitle-1 font-weight-bold mb-2">Make it extra special?</div>
          <VRow>
            <VCol v-for="addon in product.addons" :key="addon.addonOnId" cols="3">
              <VCard outlined>
                <VCardText>
                  <!-- <div class="d-flex flex-column align-center justify-center">
                      <VImg
                        src="https://terrysflorist.com/images/mylar.jpg"
                        class="flex-grow-0"
                        width="48"></VImg>
                    </div> -->
                  <div class="text-subtitle-2 my-2 text-center" v-text="addon.addOnName"></div>
                  <div>
                    <VSelect
                      v-if="addon.addOnOptions"
                      :items="addon.addOnOptions"
                      name="id"
                      :item-text="(i) => `${i.name} - ${i.price}`"
                      :label="addon.defaultSelectOption"
                      outlined
                      dense
                      hide-details="auto"
                      class="mt-4 text-body-2"
                      return-object>
                    </VSelect>
                  </div>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </div>

        <div class="my-6">
          <div class="d-flex">
            <VBtn color="pink" depressed dark large>
              <VIcon size="20" class="mr-2">fas fa-plus</VIcon>
              Add to Cart
            </VBtn>
            <VBtn color="green" class="ml-2" depressed dark large>
              Buy Now
              <VIcon size="20" class="ml-2">fas fa-caret-right</VIcon>
            </VBtn>
          </div>
        </div>
      </VCol>
    </VRow>

    <VCard class="mt-6" outlined>
      <VCardTitle class="text-subtitle-1 font-weight-bold">Description</VCardTitle>
      <VCardText v-text="product.description"></VCardText>
    </VCard>

    <div>
      <h3 class="text-h5 text-center mt-12 mb-4">Terry's Top Picks</h3>
      <VRow>
        <!-- <VCol v-for="product in products" :key="product.id" xl="2" lg="3" sm="6" xs="6" cols="12">
            <ProductCard
              link="/products/2321"
              :img="product.image"
              :title="product.title"
              :price="product.price"
              :avail="true"></ProductCard>
          </VCol> -->
      </VRow>
    </div>
  </div>
</template>
