<script src="./FixedContainer.js"></script>

<template>
  <div class="fixedContainer">
    <VRow no-gutters>
      <VCol lg="8" md="11" sm="12">
        <VCard class="fixedContainer__card" elevation="0" tile>
          <VCardTitle>
            <strong class="text-h5 font-weight-bold"
              >Serving Our Community For Over 20 Years</strong
            >
            <div class="text-subtitle-1 font-weight-medium">
              BEAUTIFUL FLOWERS THAT ARE ALWAYS HAND-ARRANGED AND HAND-DELIVERED
            </div>
            <VRating :value="5" color="amber" dense half-increments readonly size="14"></VRating>
          </VCardTitle>

          <div class="fixedContainer__card__actions">
            <VBtn color="primary" rounded to="/categories/birthday">Birthday Flowers</VBtn>
            <VBtn color="primary purple" rounded>Tel: 1 (888) 507 9738</VBtn>
          </div>

          <div class="fixedContainer__card__hours">
            <div class="text-h6">Opening Hours</div>
            <div class="text-body-1">Monday-Friday 9AM - 6PM</div>
            <div class="text-body-1">Saturday 9AM - 1PM</div>
            <div class="text-body-1">Sunday CLOSED</div>
          </div>

          <div class="fixedContainer__card__social">
            <VBtn icon x-large>
              <v-icon size="20">fab fa-facebook-f</v-icon>
            </VBtn>
            <VBtn icon x-large>
              <v-icon size="20">fab fa-instagram</v-icon>
            </VBtn>
            <VBtn icon x-large>
              <v-icon size="20">fab fa-pinterest</v-icon>
            </VBtn>
          </div>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" src="./FixedContainer.scss" scoped></style>
