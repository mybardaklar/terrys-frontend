<script>
import CheckoutCartSummary from '~/components/CheckoutCartSummary/CheckoutCartSummary.vue';
import CheckoutDiscountCode from '~/components/CheckoutDiscountCode/CheckoutDiscountCode.vue';

export default {
  components: { CheckoutCartSummary, CheckoutDiscountCode },
  layout: 'withoutFixedContainer',
  data: () => ({
    productQuantity: 1,
    paymentMethod: 'creditCard'
  }),
  methods: {
    incrementQuantity() {
      this.productQuantity =
        this.productQuantity < 5 ? parseInt(this.productQuantity, 10) + 1 : this.productQuantity;
    },
    decrementQuantity() {
      this.productQuantity =
        this.productQuantity > 1 ? parseInt(this.productQuantity, 10) - 1 : this.productQuantity;
    }
  }
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
                <VStepperStep color="green" step="" :complete="true" class="text-body-2">
                  Bill to
                </VStepperStep>
                <VDivider class="completed-step-divider"></VDivider>
                <VStepperStep color="green" step="" :complete="true" class="font-weight-bold">
                  Recipients
                </VStepperStep>
                <VDivider></VDivider>
                <VStepperStep
                  color="green"
                  step=""
                  :complete="true"
                  class="text-body-2 font-weight-bold">
                  Review Order &amp; Payment
                </VStepperStep>
              </VStepperHeader>
            </VStepper>

            <div class="pa-5">
              <div class="text-h6 font-weight-bold mb-4">Billing Address</div>
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
                <VCol cols="12">
                  <VTextField
                    color="green"
                    label="Email Address"
                    type="email"
                    hide-details="auto"
                    dense
                    outlined></VTextField>
                </VCol>
                <VCol cols="12">
                  <VTextField
                    color="green"
                    label="Street Address"
                    hide-details="auto"
                    dense
                    outlined></VTextField>
                </VCol>
                <VCol cols="12">
                  <VTextField
                    color="green"
                    label="Street Address 2"
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
              </VRow>

              <VDivider class="my-10"></VDivider>

              <div class="text-h6 font-weight-bold mb-4">Payment Method</div>
              <VRadioGroup v-model="paymentMethod">
                <VCard
                  :color="paymentMethod === 'paypal' ? 'rgba(90, 181, 94, 0.2)' : ''"
                  outlined
                  @click="paymentMethod = 'paypal'">
                  <VCardText>
                    <div class="d-flex align-center justify-space-between">
                      <div class="d-flex align-center">
                        <div>
                          <VRadio value="paypal">
                            <template #label>
                              <strong class="black--text">PayPal</strong>
                            </template>
                          </VRadio>
                        </div>
                        <div class="grey--text ml-4">
                          You will be redirected to the PayPal website after submitting your order
                        </div>
                      </div>

                      <div>
                        <VCard outlined>
                          <VCardText class="pa-2">
                            <VImg src="/images/paypal.png" width="60" height="15"></VImg>
                          </VCardText>
                        </VCard>
                      </div>
                    </div>
                  </VCardText>
                </VCard>

                <VCard
                  :color="paymentMethod === 'creditCard' ? 'rgba(90, 181, 94, 0.2)' : ''"
                  class="mt-4"
                  outlined
                  @click="paymentMethod = 'creditCard'">
                  <VCardText>
                    <div>
                      <div class="d-flex align-center justify-space-between">
                        <div class="d-flex align-center">
                          <div>
                            <VRadio color="green" value="creditCard">
                              <template #label>
                                <strong class="black--text">Pay with Credit Card</strong>
                              </template>
                            </VRadio>
                          </div>
                        </div>

                        <div class="d-flex align-center">
                          <VCard class="mr-1" outlined>
                            <VCardText class="pa-2">
                              <VImg src="/images/visa.png" width="60" height="15"></VImg>
                            </VCardText>
                          </VCard>
                          <VCard class="mr-1" outlined>
                            <VCardText class="pa-2">
                              <VImg src="/images/discover.png" width="60" height="15"></VImg>
                            </VCardText>
                          </VCard>
                          <VCard class="mr-1" outlined>
                            <VCardText class="pa-2">
                              <VImg src="/images/maestro.png" width="60" height="15"></VImg>
                            </VCardText>
                          </VCard>
                          <VCard light outlined>
                            <VCardText class="pa-2">
                              <VImg src="/images/mastercard.png" width="60" height="15"></VImg>
                            </VCardText>
                          </VCard>
                        </div>
                      </div>
                    </div>

                    <div v-show="paymentMethod === 'creditCard' ? true : false" class="mt-4">
                      <VRow>
                        <VCol cols="12">
                          <VTextField
                            color="green"
                            label="Card Mumber"
                            hide-details="auto"
                            dense
                            outlined></VTextField>
                        </VCol>
                        <VCol cols="6">
                          <VTextField
                            color="green"
                            label="Expiration Date"
                            hide-details="auto"
                            dense
                            outlined></VTextField>
                        </VCol>
                        <VCol cols="6">
                          <VTextField
                            color="green"
                            label="Card Security Code"
                            hide-details="auto"
                            dense
                            outlined></VTextField>
                        </VCol>
                      </VRow>
                    </div>
                  </VCardText>
                </VCard>
              </VRadioGroup>

              <VRow class="mt-8">
                <VCol cols="6">
                  <VBtn elevation="0" @click="$router.push('/checkout/recipients')">
                    <VIcon left>fas fa-arrow-left</VIcon>
                    Prev
                  </VBtn>
                </VCol>
                <VCol cols="6" class="text-right">
                  <VBtn color="green" elevation="0" dark @click="$router.push('/checkout/payment')">
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
