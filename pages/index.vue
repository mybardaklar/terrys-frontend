<script>
import HomepageBanners from '~/components/HomepageBanners/HomepageBanners.vue';
import ProductList from '~/components/ProductList/ProductList.vue';

export default {
  components: { HomepageBanners, ProductList },

  async asyncData({ $axios }) {
    const products = await $axios.$get('/api/products');

    return {
      products
    };
  },

  data: () => ({
    breadcrumbs: [
      {
        text: 'Category',
        disabled: false,
        href: 'categories'
      },
      {
        text: 'Best Sellers',
        disabled: true,
        href: 'best-sellers'
      }
    ],
    selectBoxOptions: [
      { value: 10, text: 'Sort by: Best Selling' },
      { value: 20, text: 'Sort by: Lowest Price' },
      { value: 30, text: 'Sort by: Highest Price' }
    ],
    selectBoxSelectedOption: { value: 10 }
  }),

  computed: {
    getProductsLength() {
      return this.products.count;
    }
  }
};
</script>

<template>
  <div>
    <HomepageBanners />

    <VRow align="center">
      <VCol lg="8" md="8" sm="8" cols="12">
        <VBreadcrumbs :items="breadcrumbs" class="px-0 py-0" large>
          <template #divider>
            <VIcon>fas fa-angle-right</VIcon>
          </template>
        </VBreadcrumbs>
      </VCol>
      <VCol lg="4" md="4" sm="4" cols="12">
        <VTextField
          label="Search"
          placeholder="Product name or SKU ID"
          outlined
          dense
          hide-details="auto"
          clearable></VTextField>
      </VCol>
    </VRow>

    <VRow align="center">
      <VCol lg="8" md="8" sm="8" cols="6">
        <div class="text-body-2" v-text="`${getProductsLength} products found`"></div>
      </VCol>
      <VCol lg="4" md="4" sm="4" cols="6">
        <VSelect
          v-model="selectBoxSelectedOption"
          :items="selectBoxOptions"
          item-text="text"
          item-value="value"
          hide-details="auto"
          dense
          single-line
          return-object></VSelect>
      </VCol>
    </VRow>

    <ProductList :products="products.rows"></ProductList>
  </div>
</template>

<style lang="scss"></style>
