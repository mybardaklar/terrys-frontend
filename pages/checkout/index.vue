<script>
import CheckoutCartSummary from '~/components/CheckoutCartSummary/CheckoutCartSummary.vue';
import CheckoutDiscountCode from '~/components/CheckoutDiscountCode/CheckoutDiscountCode.vue';
import CheckoutBilling from '~/components/CheckoutBilling/CheckoutBilling.vue';
import CheckoutRecipients from '~/components/CheckoutRecipients/CheckoutRecipients.vue';
import CheckoutPayment from '~/components/CheckoutPayment/CheckoutPayment.vue';
import CheckoutSuccessful from '~/components/CheckoutSuccessful/CheckoutSuccessful.vue';
import CheckoutFailed from '~/components/CheckoutFailed/CheckoutFailed.vue';

export default {
  components: {
    CheckoutCartSummary,
    CheckoutDiscountCode,
    CheckoutBilling,
    CheckoutRecipients,
    CheckoutPayment,
    CheckoutSuccessful,
    CheckoutFailed
  },
  layout: 'withoutFixedContainer'
};
</script>

<template>
  <VContainer>
    <div class="rounded overflow-hidden">
      <VImg src="/images/banner-memorial.webp"></VImg>
    </div>

    <div v-if="getCheckoutStep !== undefined" class="mt-8">
      <template v-if="getCheckoutStep === 4">
        <CheckoutSuccessful />
      </template>

      <template v-else-if="getCheckoutStep === 5">
        <CheckoutFailed />
      </template>

      <template v-else>
        <VRow>
          <VCol xl="9" lg="8" cols="12">
            <VCard outlined>
              <VStepper :value="getCheckoutStep" elevation="0" @change="setCheckoutStep">
                <VStepperHeader>
                  <VStepperStep
                    color="green"
                    step="1"
                    :complete="parseInt(getCheckoutStep) > 1"
                    class="text-body-2 font-weight-bold">
                    Bill to
                  </VStepperStep>

                  <VDivider></VDivider>

                  <VStepperStep
                    color="green"
                    step="2"
                    :complete="parseInt(getCheckoutStep) > 2"
                    class="text-body-2">
                    Recipients
                  </VStepperStep>

                  <VDivider></VDivider>

                  <VStepperStep
                    color="green"
                    step="3"
                    :complete="parseInt(getCheckoutStep) > 3"
                    class="text-body-2">
                    Review Order &amp; Payment
                  </VStepperStep>
                </VStepperHeader>
              </VStepper>

              <div class="pa-5">
                <CheckoutBilling v-if="getCheckoutStep === 1" />
                <CheckoutRecipients v-if="getCheckoutStep === 2" />
                <CheckoutPayment v-if="getCheckoutStep === 3" />
              </div>
            </VCard>
          </VCol>

          <VCol xl="3" lg="4" cols="12">
            <CheckoutDiscountCode />
            <CheckoutCartSummary class="mt-8" />
          </VCol>
        </VRow>
      </template>
    </div>
  </VContainer>
</template>
