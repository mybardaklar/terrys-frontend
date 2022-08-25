<script src="./CartDrawerNavProduct.js"></script>

<template>
  <VListItem>
    <VListItemAvatar tile class="overflow-visible">
      <VAvatar size="40" tile>
        <VImg :src="img"></VImg>
      </VAvatar>
    </VListItemAvatar>

    <VListItemContent>
      <VListItemTitle>{{ title }}</VListItemTitle>
      <VListItemSubtitle>{{ type }}</VListItemSubtitle>
      <div class="text-caption mt-1" style="line-height: 1.4">
        <div v-for="(extra, index) in extras" :key="index" class="mt-1">
          <div>
            <strong>extra.addOnOptions[0].name</strong>
            <span>{{ `(${extra.addOnName})` }}</span>
          </div>
          <strong class="d-block pink--text">
            <span>{{ extra.addOnOptions[0].price }}</span>
          </strong>
        </div>
      </div>
    </VListItemContent>

    <VListItemAction>
      <VListItemActionText>
        <div class="text-h6 pink--text">
          $<span>{{ (Math.floor(price * 100) / 100).toFixed(2) }}</span>
        </div>
      </VListItemActionText>

      <VBtn color="red darken-1" dark x-small outlined @click="deleteItem()">Remove</VBtn>
    </VListItemAction>
  </VListItem>
</template>

<style lang="scss" src="./CartDrawerNavProduct.scss" scoped></style>
