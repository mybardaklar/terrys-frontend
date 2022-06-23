<template>
  <div>
    <v-text-field v-model="search"></v-text-field>
    <div v-for="(product, i) in productSorted" :key="i">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ $axios, route }) {
    const products = await $axios.$get(
      `/api/categories/${encodeURIComponent(route.params.categori)}`
    );
    return {
      products
    };
  },

  data() {
    return {
      search: ''
    };
  },
  computed: {
    productSorted() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
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
    }
  }
};
</script>
