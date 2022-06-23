<script>
import CheckoutCartSummary from '~/components/CheckoutCartSummary/CheckoutCartSummary.vue';
import CheckoutDiscountCode from '~/components/CheckoutDiscountCode/CheckoutDiscountCode.vue';

export default {
  components: { CheckoutCartSummary, CheckoutDiscountCode },
  layout: 'withoutFixedContainer',
  data: () => ({
    productQuantity: 1
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
                <VStepperStep
                  color="green"
                  step=""
                  :complete="true"
                  class="text-body-2 font-weight-bold">
                  Recipients
                </VStepperStep>
                <VDivider></VDivider>
                <VStepperStep color="green" step="" class="text-body-2">
                  Review Order &amp; Payment
                </VStepperStep>
              </VStepperHeader>
            </VStepper>

            <div class="pa-5">
              <div
                v-for="(detail, index) in getCartOrderDetails"
                :key="index"
                :class="{ 'mt-8': index !== 0 }">
                <VCard outlined>
                  <VContainer>
                    <VRow>
                      <VCol cols="1" align-self="flex-start">
                        <VImg :src="detail.product.url"></VImg>
                      </VCol>

                      <VCol cols="7">
                        <div class="text-h6">{{ detail.product.name }}</div>
                        <VListItemSubtitle>{{ detail.product.sku_type }}</VListItemSubtitle>

                        <div class="mt-1">
                          <p class="mb-0 grey--text text-caption">
                            Item ID: {{ detail.product.productId }}
                          </p>
                        </div>

                        <div class="text-caption mt-1" style="line-height: 1.4">
                          <div
                            v-for="(extra, addOnIndex) in detail.details.productDetails.addons"
                            :key="addOnIndex">
                            <span
                              >{{ extra.addOnOptions[0].name }} {{ `(${extra.addOnName})` }}</span
                            >
                            <strong class="d-block pink--text">
                              <span>{{ extra.addOnOptions[0].price }}</span>
                            </strong>
                          </div>
                        </div>
                      </VCol>

                      <VCol cols="2" class="text-center" align-self="center">
                        <div class="black--text text-subtitle-2">Price</div>
                        <div class="text-h6 pink--text font-weight-bold">
                          ${{ detail.product.price }}
                        </div>
                      </VCol>

                      <VCol cols="2" class="text-center" align-self="center">
                        <div class="black--text text-subtitle-2">Subtotal</div>
                        <div class="text-h6 pink--text font-weight-bold">
                          ${{
                            (
                              Math.floor(detail.details.productDetails.productPrice * 100) / 100
                            ).toFixed(2)
                          }}
                        </div>
                      </VCol>
                    </VRow>
                  </VContainer>

                  <VContainer class="py-8">
                    <VRow>
                      <VCol cols="6">
                        <VTextField
                          color="green"
                          label="Recipient's First Name"
                          hide-details="auto"
                          dense
                          outlined></VTextField>
                      </VCol>
                      <VCol cols="6">
                        <VTextField
                          color="green"
                          label="Recipient's Last Name"
                          hide-details="auto"
                          dense
                          outlined></VTextField>
                      </VCol>
                      <VCol cols="6">
                        <VTextField
                          color="green"
                          label="Recipient's Email"
                          hide-details="auto"
                          dense
                          outlined></VTextField>
                      </VCol>
                      <VCol cols="6">
                        <VTextField
                          color="green"
                          label="Recipient's Phone"
                          hide-details="auto"
                          dense
                          outlined></VTextField>
                      </VCol>
                      <VCol cols="12">
                        <VSelect
                          :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                          color="green"
                          label="Occasions"
                          hide-details="auto"
                          dense
                          outlined></VSelect>
                      </VCol>
                      <VCol cols="6">
                        <VTextarea
                          color="green"
                          label="Free Card Message"
                          hide-details="auto"
                          dense
                          outlined></VTextarea>
                      </VCol>
                      <VCol cols="6">
                        <VTextarea
                          color="green"
                          label="Special Card Message"
                          hide-details="auto"
                          dense
                          outlined></VTextarea>
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
                          label="Country"
                          hide-details="auto"
                          dense
                          outlined></VTextField>
                      </VCol>
                    </VRow>

                    <div class="mt-8" v-if="index === 0">
                      <VCheckbox input-value="true" color="green" hide-details="auto">
                        <template #label>
                          <div class="text-body-2">Use this address for all shipments</div>
                        </template>
                      </VCheckbox>
                    </div>

                    <VBtn color="green" elevation="0" class="mt-8" block dark>
                      Save Address To Continue
                    </VBtn>
                  </VContainer>
                </VCard>
              </div>

              <VRow class="mt-8">
                <VCol cols="6">
                  <VBtn elevation="0" @click="$router.push('/checkout')">
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
