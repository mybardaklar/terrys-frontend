<script src="./CartDrawerNavProduct.js"></script>

<template>
  <VListItem>
    <VListItemAvatar tile class="overflow-visible">
      <VBadge :content="pcs" color="pink" overlap right>
        <VAvatar size="40" tile>
          <VImg :src="img"></VImg>
        </VAvatar>
      </VBadge>
    </VListItemAvatar>

    <VListItemContent>
      <VListItemTitle v-text="title"></VListItemTitle>
      <VListItemSubtitle v-text="type"></VListItemSubtitle>
      <div class="text-caption mt-1" style="line-height: 1.4">
        <div v-for="(extra, index) in extras" :key="index">
          <span v-text="extra.title"></span>
          <strong class="d-block pink--text">$<span v-text="extra.price"></span></strong>
        </div>
      </div>
      <!-- <VBtn x-small outlined class="mt-2">Show Extras</VBtn> -->
    </VListItemContent>

    <VListItemAction>
      <VListItemActionText>
        <div class="text-h6 pink--text">$<span v-text="price"></span></div>
      </VListItemActionText>
      <VBtn color="red darken-1" dark x-small outlined>Remove</VBtn>
    </VListItemAction>
  </VListItem>
</template>

<style lang="scss" src="./CartDrawerNavProduct.scss" scoped></style>
