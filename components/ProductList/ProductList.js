import ProductCard from '~/components/ProductCard/ProductCard.vue'

export default {
  components: { ProductCard },
  data: () => ({
    products: [],
  }),
  async fetch() {
    this.products = await this.$http.$get('https://fakestoreapi.com/products')
  },
}
