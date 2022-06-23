<script>
import CheckoutCartSummary from '~/components/CheckoutCartSummary/CheckoutCartSummary.vue';
import CheckoutDiscountCode from '~/components/CheckoutDiscountCode/CheckoutDiscountCode.vue';

export default {
  components: { CheckoutCartSummary, CheckoutDiscountCode },
  layout: 'withoutFixedContainer'
};
</script>

<template>
  <VContainer>
    <div class="rounded overflow-hidden">
      <VImg src="/images/banner-memorial.webp"></VImg>
    </div>

    <div class="mt-8">
      <VRow>
        <VCol cols="9">
          <VCard outlined>
            <VStepper elevation="0">
              <VStepperHeader>
                <VStepperStep
                  color="green"
                  step=""
                  :complete="true"
                  class="text-body-2 font-weight-bold">
                  Bill to
                </VStepperStep>
                <VDivider></VDivider>
                <VStepperStep color="green" step="" class="text-body-2"> Recipients </VStepperStep>
                <VDivider></VDivider>
                <VStepperStep color="green" step="" class="text-body-2">
                  Review Order &amp; Payment
                </VStepperStep>
              </VStepperHeader>
            </VStepper>

            <div class="pa-5">
              <VRow>
                <VCol cols="6">
                  <VTextField
                    color="green"
                    label="First Name"
                    hide-details="auto"
                    dense
                    outlined></VTextField>
                </VCol>
                <VCol cols="6">
                  <VTextField
                    color="green"
                    label="Last Name"
                    hide-details="auto"
                    dense
                    outlined></VTextField>
                </VCol>
                <VCol cols="6">
                  <VTextField
                    color="green"
                    label="Zip/Postal Code"
                    hide-details="auto"
                    dense
                    outlined></VTextField>
                </VCol>
                <VCol cols="6">
                  <VTextField
                    color="green"
                    label="Phone"
                    hide-details="auto"
                    dense
                    outlined></VTextField>
                </VCol>
                <VCol cols="6">
                  <VSelect
                    :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                    color="green"
                    label="State/Province"
                    hide-details="auto"
                    dense
                    outlined></VSelect>
                </VCol>
                <VCol cols="6">
                  <VTextField
                    color="green"
                    label="City"
                    hide-details="auto"
                    dense
                    outlined></VTextField>
                </VCol>
                <VCol cols="6">
                  <VBtn elevation="0">
                    <VIcon left>fas fa-circle-xmark</VIcon>
                    Cancel
                  </VBtn>
                </VCol>
                <VCol cols="6" class="text-right">
                  <VBtn
                    color="green"
                    elevation="0"
                    dark
                    @click="$router.push('/checkout/recipients')">
                    Next
                    <VIcon right>fas fa-arrow-right</VIcon>
                  </VBtn>
                </VCol>
              </VRow>
            </div>
          </VCard>
        </VCol>

        <VCol cols="3">
          <CheckoutDiscountCode />
          <CheckoutCartSummary class="mt-8" />
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>

<style lang="scss" scoped>
::v-deep .v-stepper__step__step {
  width: 16px;
  height: 16px;
  min-width: 0;

  i {
    font-size: 10px !important;
  }
}
</style>
