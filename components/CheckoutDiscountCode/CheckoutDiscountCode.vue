<script>
export default {
  data: () => ({
    isActive: true
  })
};
</script>

<template>
  <VCard outlined>
    <VCardTitle class="d-flex justify-space-between cursor-pointer" @click="isActive = !isActive">
      <span class="text-subtitle-1 font-weight-bold">Discount Codes</span>
      <VIcon
        class="black--text"
        size="16"
        v-text="isActive ? 'fas fa-caret-up' : 'fas fa-caret-down'"></VIcon>
    </VCardTitle>

    <VCardText v-show="isActive">
      <VTextField
        color="green"
        label="Enter your coupon code"
        hide-details="auto"
        dense
        outlined></VTextField>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.cursor-pointer {
  cursor: pointer;
  user-select: none;
}
</style>
