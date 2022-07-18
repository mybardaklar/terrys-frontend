<script>
import ProductList from '~/components/ProductList/ProductList.vue';

export default {
  components: { ProductList },
  async asyncData({ $axios, route }) {
    const products = await $axios.$get(
      `/api/categories/${encodeURIComponent(route.params.category)}`
    );

    return {
      products
    };
  },

  data: () => ({
    search: '',
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
      { value: 'lowestPrice', text: 'Sort by: Lowest Price' },
      { value: 'highestPrice', text: 'Sort by: Highest Price' }
    ],
    selectBoxSelectedOption: { value: 'lowestPrice' }
  }),

  computed: {
    productSorted() {
      // eslint-disable-next-line
      const data = this.products.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      return data.filter((item) => {
        if (String(item.name.toLowerCase()).match(this.search.trim().toLowerCase())) {
          return item;
        }

        return null;
      });
    },

    filteredProducts() {
      // eslint-disable-next-line
      let filteredProducts;

      if (this.selectBoxSelectedOption.value === 'lowestPrice') {
        // eslint-disable-next-line
        filteredProducts = this.productSorted.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      } else {
        // eslint-disable-next-line
        filteredProducts = this.productSorted.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      }

      return this.productSorted;
    }
  }
};
</script>

<template>
  <div>
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
          v-model="search"
          label="Search"
          placeholder="Product name or SKU ID"
          outlined
          dense
          hide-details="auto"></VTextField>
      </VCol>
    </VRow>

    <div>{{ filteredProducts }}</div>

    <VRow align="center">
      <VCol lg="8" md="8" sm="8" cols="6">
        <div class="text-body-2" v-text="`${productSorted.length} products found`"></div>
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

    <ProductList :products="productSorted"></ProductList>
  </div>
</template>
