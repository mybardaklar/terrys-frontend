<script src="./MainFooter.js"></script>

<template>
  <div>
    <VCard class="mt-8" outlined>
      <VCardTitle>Terry’s Difference</VCardTitle>
      <VCardText>
        Terry’s Florist is a premium one stop shop to order flowers for all occasions offering
        exquisite arrangements for Birthdays, Anniversaries, Special Days, and all Celebrations.
        With over 20 years of versed and expert experience you can feel confident of fulfilling your
        floral needs in our hands and service.

        <blockquote class="blockquote pb-0">
          Some urgent orders for occasions such as funerals and pressing events can be delivered
          within 45 minutes. You can call us for these orders.
        </blockquote>
      </VCardText>

      <VCardTitle>Flowers for Funerals</VCardTitle>
      <VCardText>
        Terry’s Florist Always maintains the high quality of elegance and class. We have built
        relationships with all local Funeral Directors in for last minute orders. All funeral
        flowers are placed in prominent areas during viewings and memorial services.
      </VCardText>

      <VCardTitle>Our Customer Service also sets Terry’s Flowers apart.</VCardTitle>
      <VCardText>
        Terry’s Florist Always maintains the high quality of elegance and class. We have built
        relationships with all local Funeral Directors in for last minute orders. All funeral
        flowers are placed in prominent areas during viewings and memorial services.
      </VCardText>
    </VCard>

    <VCard class="mt-8" outlined>
      <VCardTitle>Serving</VCardTitle>
      <VCardText>
        We are committed to serving those in the community. Most of our clients are your friends and
        neighbors. Terry's Florist appoints the top floral designer to ensure quality creation and
        timely delivery. Check out a few of our reviews below!
      </VCardText>
    </VCard>

    <div class="rounded overflow-hidden mt-8">
      <VImg src="/images/follow_us.webp"></VImg>
    </div>

    <div class="d-flex align-center justify-center pa-4">
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

    <VContainer class="pa-0 -ma-4" fluid>
      <VCard class="text-center w-full" flat tile>
        <VCardText>
          <div class="d-flex justify-center">
            <VImg src="/images/secure-stripe.webp" max-width="200"></VImg>
          </div>
        </VCardText>
        <VCardText class="pb-0">
          <VRow class="d-flex justify-center align-center">
            <VCol><VBtn text small>Privacy Policy</VBtn></VCol>
            <VCol><VBtn text small>Return Policy</VBtn></VCol>
            <VCol><VBtn text small>Terms &amp; Conditions</VBtn></VCol>
            <VCol><VBtn text small>Contact Us</VBtn></VCol>
          </VRow>
        </VCardText>
        <VCardText>
          &copy; {{ new Date().getFullYear() }} terrysflorist.com. All Rights Reserved<br />Terrys
          Florist LLC
        </VCardText>
        <VDivider></VDivider>
        <VCardText>
          <VBtn color="green">SIGN UP FOR 10% OFF!</VBtn>
        </VCardText>
      </VCard>
    </VContainer>
  </div>
</template>

<style lang="scss" src="./MainFooter.scss" scoped></style>
