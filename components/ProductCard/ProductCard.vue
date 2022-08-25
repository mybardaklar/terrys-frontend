<script src="./ProductCard.js"></script>

<template>
  <NuxtLink :to="link" class="productCard">
    <VCard class="productCard__wrapper">
      <div class="d-flex justify-center text-center py-4 px-4">
        <VImg
          :src="img"
          :width="imgSize"
          :max-width="imgSize"
          :height="imgSize"
          :max-height="imgSize"
          aspect-ratio="1"
          contain></VImg>
      </div>
      <VChip color="primary green" class="productCard__chip" label>
        $<span>{{ price }}</span>
      </VChip>
      <div v-show="avail" class="productCard__badge">Avail Today</div>
      <VCardTitle class="text-subtitle-1 text-center">{{ title }}</VCardTitle>
    </VCard>
  </NuxtLink>
</template>

<style lang="scss" src="./ProductCard.scss" scoped></style>
