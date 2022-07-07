<template>
  <VCard outlined>
    <VCardText class="text-center">
      <img src="/images/successful.svg" width="256" />

      <h1 class="green--text mt-6">Your order is completed!</h1>

      <div class="d-flex flex-column align-center mt-6">
        <div class="my-1 text-subtitle-1">
          <strong>First Name:</strong>
          <span id="CheckoutSuccessFirstName">Mahir</span>
        </div>

        <div class="my-1 text-subtitle-1">
          <strong>Last Name:</strong>
          <span id="CheckoutSuccessLastName">Altinkaya</span>
        </div>

        <div class="my-1 text-subtitle-1">
          <strong>Email:</strong>
          <span id="CheckoutSuccessEmail">mahiraltinkaya@gmail.com</span>
        </div>
      </div>

      <div class="mt-6">
        <div class="d-flex justify-center">
          <VBtn color="pink" depressed dark>
            <VIcon size="16" class="mr-2">fas fa-arrow-left</VIcon>
            My Order
          </VBtn>

          <VBtn to="/" color="green" class="ml-2" depressed dark>
            <VIcon size="16" class="mr-2">fas fa-home</VIcon>
            Home
          </VBtn>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
