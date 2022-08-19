<script src="./MobileBottomSheet.js"></script>

<template>
  <div>
    <VBottomSheet :value="getMobileBottomSheet" @input="setMobileBottomSheet(false)">
      <VCard tile>
        <VList nav dense>
          <VSubheader>NAVIGATION</VSubheader>

          <VListItem @click="$router.push({ path: '/' })">
            <VListItemTitle>Occassions</VListItemTitle>
          </VListItem>

          <VListItem @click="$router.push({ path: '/' })">
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

              <VListItem @click="$router.push({ path: '/' })">
                <VListItemTitle>Standing Sprays &amp; Wreaths</VListItemTitle>
              </VListItem>
              <VListItem @click="$router.push({ path: '/' })">
                <VListItemTitle>Funeral Service Bouquets</VListItemTitle>
              </VListItem>
              <VListItem @click="$router.push({ path: '/' })">
                <VListItemTitle>For Caskets</VListItemTitle>
              </VListItem>
            </VListGroup>

            <VListGroup no-action sub-group>
              <template #activator>
                <VListItemContent>
                  <VListItemTitle>For the Home</VListItemTitle>
                </VListItemContent>
              </template>

              <VListItem @click="$router.push({ path: '/' })">
                <VListItemTitle>Most Popular</VListItemTitle>
              </VListItem>
              <VListItem @click="$router.push({ path: '/' })">
                <VListItemTitle>Sympathy Plants</VListItemTitle>
              </VListItem>
              <VListItem @click="$router.push({ path: '/' })">
                <VListItemTitle>Sympathy Floral Baskets</VListItemTitle>
              </VListItem>
            </VListGroup>
          </VListGroup>

          <VListItem @click="$router.push({ path: '/' })">
            <VListItemTitle>Get Well</VListItemTitle>
          </VListItem>

          <VListItem @click="$router.push({ path: '/' })">
            <VListItemTitle>Winter</VListItemTitle>
          </VListItem>

          <VListItem @click="$router.push({ path: '/' })">
            <VListItemTitle>Plants</VListItemTitle>
          </VListItem>

          <VListItem @click="$router.push({ path: '/' })">
            <VListItemTitle>Roses</VListItemTitle>
          </VListItem>
        </VList>
      </VCard>
    </VBottomSheet>
  </div>
</template>

<style lang="scss" src="./MobileBottomSheet.scss" scoped></style>
