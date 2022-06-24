<script src="./ProductList.js"></script>

<template>
  <div>
    <h3 class="text-h5 text-center mt-12 mb-4">Terry's Top Picks</h3>
    <VRow>
      <VCol v-for="product in products" :key="product.id" lg="4" sm="6" xs="6" cols="12">
        <ProductCard
          :link="`/products/${product.link}`"
          :img="product.url"
          :title="product.img_alt_text"
          :price="parseFloat(product.price)"
          :avail="true"></ProductCard>
      </VCol>
    </VRow>
  </div>
</template>
