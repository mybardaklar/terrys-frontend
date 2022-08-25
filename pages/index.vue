<script>
import HomepageBanners from '~/components/HomepageBanners/HomepageBanners.vue';
import ProductList from '~/components/ProductList/ProductList.vue';

export default {
  components: { HomepageBanners, ProductList },

  async asyncData({ $axios }) {
    const products = await $axios.$get(`/api/products?page=0&limit=32`);

    return {
      products
    };
  },

  data: () => ({
    pagination: 0,
    search: '',
    selectBoxOptions: [
      { value: 'lowestPrice', text: 'Sort by: Lowest Price' },
      { value: 'highestPrice', text: 'Sort by: Highest Price' }
    ],
    sortOption: 'lowestPrice',
    selectBoxSelectedOption: { value: 'lowestPrice' }
  }),

  computed: {
    searchedProducts() {
      // eslint-disable-next-line
      const data = this.products.rows.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });

      return data.filter((item) => {
        if (String(item.name && item.name.toLowerCase()).match(this.search.trim().toLowerCase())) {
          return item;
        }

        return null;
      });
    },

    filteredProducts() {
      if (this.sortOption === 'lowestPrice') {
        // eslint-disable-next-line
        return this.searchedProducts.sort(
          (a, b) => parseFloat(a.price).toFixed(2) - parseFloat(b.price).toFixed(2)
        );
      } else if (this.sortOption === 'highestPrice') {
        // eslint-disable-next-line
        let data = this.searchedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

        return data;
      }

      return [];
    },

    getProductsLength() {
      return this.filteredProducts.length;
    }
  },

  methods: {
    async loadMore() {
      this.pagination += 1;

      const products = await this.$axios.$get(`/api/products?page=${this.pagination}&limit=32`);

      this.products.rows = [...this.products.rows, ...products.rows];
    }
  }
};
</script>

<template>
  <div>
    <HomepageBanners />

    <VRow align="center">
      <VCol lg="8" md="8" sm="8" cols="12">
        <div class="text-body-2">{{ `${getProductsLength} products found` }}</div>
      </VCol>

      <VCol lg="4" md="4" sm="4" cols="12">
        <VTextField
          v-model="search"
          label="Search"
          placeholder="Search product name"
          color="green"
          outlined
          dense
          hide-details="auto" />
      </VCol>
    </VRow>

    <VRow align="center">
      <VCol lg="8" md="8" sm="8" cols="6" />

      <VCol lg="4" md="4" sm="4" cols="6">
        <VSelect
          v-model="sortOption"
          :items="selectBoxOptions"
          color="green"
          item-text="text"
          item-value="value"
          hide-details="auto"
          dense
          single-line />
      </VCol>
    </VRow>

    <ProductList :key="filteredProducts[0].name" :products="filteredProducts" />

    <div class="my-8 text-center">
      <VBtn color="green" dark elevation="0" large @click="loadMore()">Load More</VBtn>
    </div>
  </div>
</template>

<style lang="scss"></style>
