<script>
export default {
  layout: 'withoutFixedContainer'
};
</script>

<template>
  <VContainer>
    <div class="rounded overflow-hidden">
      <VImg src="/images/banner-memorial.webp"></VImg>
    </div>

    <VCard outlined>
      <VCardText class="text-center">
        <img src="/images/successful.svg" width="256" />

        <h1 class="green--text mt-6">Your order is completed!</h1>
        <p class="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod illum, unde
          dolorem dignissimos vitae porro mollitia, tempora est eveniet, earum incidunt cupiditate
          eius distinctio.
        </p>

        <div class="mt-6">
          <div class="d-flex justify-center">
            <VBtn color="pink" depressed dark>
              <VIcon size="20" class="mr-2">fas fa-arrow-left</VIcon>
              My Order
            </VBtn>
            <VBtn color="green" class="ml-2" depressed dark>
              <VIcon size="20" class="mr-2">fas fa-plus</VIcon>
              New Order
            </VBtn>
          </div>
        </div>
      </VCardText>
    </VCard>
  </VContainer>
</template>
