<script>
export default {
  methods: {
    reloadPage() {
      window.location.replace('/checkout');
    }
  }
};
</script>

<template>
  <VCard outlined>
    <VCardText class="text-center">
      <img src="/images/failed.svg" width="256" />

      <h1 class="red--text mt-6">Oops..! Your order is failed.</h1>
      <p class="mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod illum, unde dolorem
        dignissimos vitae porro mollitia, tempora est eveniet, earum incidunt cupiditate eius
        distinctio.
      </p>

      <div class="mt-6">
        <div class="d-flex justify-center">
          <VBtn color="red" class="ml-2" depressed dark @click="reloadPage">
            <VIcon size="20" class="mr-2">fas fa-arrow-rotate-left</VIcon>
            Try Again
          </VBtn>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
