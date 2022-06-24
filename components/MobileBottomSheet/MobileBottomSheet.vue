<script src="./MobileBottomSheet.js"></script>

<template>
  <div>
    <VBottomSheet :value="getMobileBottomSheet" @input="setMobileBottomSheet(false)">
      <VCard tile>
        <VList nav dense>
          <VSubheader>NAVIGATION</VSubheader>

          <VListItem to="/" nuxt>
            <VListItemTitle>Occassions</VListItemTitle>
          </VListItem>

          <VListItem to="/" nuxt>
            <VListItemTitle>Birthday</VListItemTitle>
          </VListItem>

          <VListGroup>
            <template #activator>
              <VListItemTitle>Sympathy</VListItemTitle>
            </template>

            <VListGroup no-action sub-group>
              <template #activator>
                <VListItemContent>
                  <VListItemTitle>For Services</VListItemTitle>
                </VListItemContent>
              </template>

              <VListItem to="/" nuxt>
                <VListItemTitle>Standing Sprays &amp; Wreaths</VListItemTitle>
              </VListItem>
              <VListItem to="/" nuxt>
                <VListItemTitle>Funeral Service Bouquets</VListItemTitle>
              </VListItem>
              <VListItem to="/" nuxt>
                <VListItemTitle>For Caskets</VListItemTitle>
              </VListItem>
            </VListGroup>

            <VListGroup no-action sub-group>
              <template #activator>
                <VListItemContent>
                  <VListItemTitle>For the Home</VListItemTitle>
                </VListItemContent>
              </template>

              <VListItem to="/" nuxt>
                <VListItemTitle>Most Popular</VListItemTitle>
              </VListItem>
              <VListItem to="/" nuxt>
                <VListItemTitle>Sympathy Plants</VListItemTitle>
              </VListItem>
              <VListItem to="/" nuxt>
                <VListItemTitle>Sympathy Floral Baskets</VListItemTitle>
              </VListItem>
            </VListGroup>
          </VListGroup>

          <VListItem to="/" value="" nuxt>
            <VListItemTitle>Get Well</VListItemTitle>
          </VListItem>

          <VListItem to="/" value="" nuxt>
            <VListItemTitle>Winter</VListItemTitle>
          </VListItem>

          <VListItem to="/" value="" nuxt>
            <VListItemTitle>Plants</VListItemTitle>
          </VListItem>

          <VListItem to="/" value="" nuxt>
            <VListItemTitle>Roses</VListItemTitle>
          </VListItem>
        </VList>
      </VCard>
    </VBottomSheet>
  </div>
</template>

<style lang="scss" src="./MobileBottomSheet.scss" scoped></style>
