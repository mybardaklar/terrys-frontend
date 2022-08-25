<script>
import ProductList from '~/components/ProductList/ProductList.vue';

const titleCase = require('ap-style-title-case');

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
        text: 'Home',
        disabled: false,
        href: '/'
      }
    ],
    selectBoxOptions: [
      { value: 'lowestPrice', text: 'Sort by: Lowest Price' },
      { value: 'highestPrice', text: 'Sort by: Highest Price' }
    ],
    selectBoxSelectedOption: { value: 'lowestPrice' },

    sortOption: 'lowestPrice'
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
      if (this.sortOption === 'lowestPrice') {
        // eslint-disable-next-line
        return this.productSorted.sort(
          (a, b) => parseFloat(a.price).toFixed(2) - parseFloat(b.price).toFixed(2)
        );
      } else if (this.sortOption === 'highestPrice') {
        // eslint-disable-next-line
        let data = this.productSorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

        return data;
      }

      return [];
    },

    crumbs() {
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/');
      const crumbs = [];
      let path = '';
      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path);
        if (match.name !== null) {
          crumbs.push({
            text: titleCase(param.replace(/-/g, ' ')),
            href: match.fullPath,
            disabled: true
          });
        }
      });
      return crumbs;
    }
  }
};
</script>

<template>
  <div>
    <VRow align="center">
      <VCol lg="8" md="8" sm="8" cols="12">
        <VBreadcrumbs :items="crumbs" class="px-0 pb-0">
          <template #item="{ item }">
            <VBreadcrumbsItem :href="item.href" :disabled="item.disabled">
              {{ item.text.toUpperCase() }}
            </VBreadcrumbsItem>
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

    <VRow align="center">
      <VCol lg="8" md="8" sm="8" cols="6">
        <div class="text-body-2">{{ `${productSorted.length} products found` }}</div>
      </VCol>
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
  </div>
</template>
