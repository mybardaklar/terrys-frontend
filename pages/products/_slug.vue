<script>
export default {
  layout: 'withoutFixedContainer',

  async asyncData({ $axios, route }) {
    if (route.params.slug !== undefined) {
      const product = await $axios.$get(`/api/products/${encodeURIComponent(route.params.slug)}`);

      const selectedAddOnOptions = Array(product.addons.length).fill({});

      const newAddons = product.addons.map((item) => {
        item.addOnImageUrl = `${item.addOnId}.jpg`;
        return item;
      });
      product.addons = newAddons;

      return { product, selectedAddOnOptions };
    }
  },

  data: () => ({
    addons: []
  }),

  computed: {
    productPrice() {
      let addonsTotal = 0;

      this.addons.forEach((item) => {
        addonsTotal += parseFloat(item.addOnOptions[0].price.slice(1));
      });

      const skuTotal = parseFloat(this.product.prices[this.product.sku_id].price.slice(1));

      return addonsTotal + skuTotal;
    }
  },

  methods: {
    updateAddons(addon) {
      const addOnObject = { ...addon };

      this.selectedAddOnOptions.forEach((item) => {
        if (item.id) {
          addOnObject.addOnOptions = [item];
        }
      });

      if (this.addons.some((item) => item.addOnId === addon.addOnId)) {
        this.addons = this.addons.filter((item) => {
          return item.addOnId !== addon.addOnId;
        });

        this.addons.push(addOnObject);
      } else {
        this.addons.push(addOnObject);
      }
    },

    addToCart() {
      const newItem = {
        id: null,
        productId: null,
        price: this.productPrice,
        order_date: null,
        delivery_date: null,
        delivery_details: null,
        details: {
          fullfill: {},
          productDetails: {
            tax: (30 / 100) * 7,
            cargo: 15,
            addons: this.addons,
            productPrice: this.productPrice
          }
        },
        product: {
          id: this.product.id,
          sku_id: this.product.sku_id,
          productId: this.product.productId,
          name: this.product.name,
          url: this.product.sku_types.find((sku) => sku.skuId === this.product.sku_id).image,
          price: parseFloat(this.product.prices[this.product.sku_id].price.slice(1)),
          sku_type: this.product.sku_types.find((sku) => sku.skuId === this.product.sku_id)
            .skuTypeName
        },
        delivery: {
          id: null,
          firstname: '',
          lastname: '',
          zipcode: '',
          phone: '',
          email: '',
          city: '',
          state: '',
          message: '',
          note: '',
          address1: '',
          address2: '',
          institution: '',
          institution_name: '',
          orderDetailId: null,
          occasionId: null,
          occasion: null
        }
      };

      this.setCartItem(newItem);
      this.setTotalPrice();
      this.setCartDrawerNav(true);
    }
  }
};
</script>

<template>
  <div>
    <VRow>
      <VCol lg="3" sm="5" cols="12">
        <VCard outlined>
          <VImg :src="product.sku_types.find((sku) => sku.skuId === product.sku_id).image"></VImg>
        </VCard>
      </VCol>

      <VCol lg="9" sm="7" cols="12">
        <h6 class="text-overline font-weight-medium text--disabled">
          <span v-text="product.tf_id"></span>
          <VTooltip right>
            <template #activator="{ on, attrs }">
              <VIcon size="16" v-bind="attrs" v-on="on">fas fa-circle-question</VIcon>
            </template>
            <span>Item No. {{ product.tf_id }}</span>
          </VTooltip>
        </h6>
        <h1 class="text-h4 font-weight-medium" v-text="product.img_alt_text"></h1>

        <div class="mt-6">
          <div class="text-subtitle-1 font-weight-bold mb-2">Upgrade your bouquet</div>
          <VRadioGroup v-model="product.sku_id" hide-details="auto" class="my-0" row>
            <VRow>
              <VCol v-for="sku in product.sku_types" :key="sku.skuId" lg="3" cols="12">
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

        <div v-if="product.addons.length > 0" class="mt-6">
          <div class="text-subtitle-1 font-weight-bold mb-2">Make it extra special?</div>
          <VRow>
            <VCol v-for="(addon, index) in product.addons" :key="addon.addonOnId" cols="3">
              <VCard outlined>
                <VCardText class="text-center">
                  <VImg
                    :src="`/images/${addon.addOnImageUrl}`"
                    width="80"
                    height="80"
                    class="d-inline-block"
                    :alt="addon.addOnName"></VImg>

                  <div class="text-subtitle-2 my-2 text-center" v-text="addon.addOnName"></div>
                  <div>
                    <VSelect
                      v-if="addon.addOnOptions"
                      v-model="selectedAddOnOptions[index]"
                      :items="addon.addOnOptions"
                      :item-text="(i) => `${i.name} - ${i.price}`"
                      item-value="id"
                      :label="addon.defaultSelectOption"
                      outlined
                      dense
                      hide-details="auto"
                      class="mt-4 text-body-2"
                      return-object
                      @change="updateAddons(addon)">
                    </VSelect>
                  </div>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </div>

        <div class="my-6">
          <div class="d-flex">
            <VBtn color="pink" depressed dark large @click="addToCart()">
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
  </div>
</template>
