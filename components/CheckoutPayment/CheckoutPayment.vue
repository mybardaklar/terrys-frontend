<script>
export default {
  data: () => ({
    paymentMethod: 'creditCard',
    creditCardHolderFirstName: 'Mahmut',
    creditCardHolderLastName: 'Uzun',
    creditCardNumber: '4007 0000 0002 7777',
    creditCardExpireDate: '0822',
    creditCardCvc: '555',

    creditCardFormValidation: false
  }),

  mounted() {
    this.orderTracking();
  },

  methods: {
    async nextStep() {
      // eslint-disable-next-line
      try {
        if (this.paymentMethod === 'creditCard') {
          const request = await this.$axios.$post('/api/payments', {
            cardNumber: this.creditCardNumber,
            expirationDate: this.creditCardExpireDate,
            cardCode: this.creditCardCvc,
            firstname: this.creditCardHolderFirstName,
            lastname: this.creditCardHolderLastName,
            orderId: this.getOrderId
          });

          // eslint-disable-next-line
          console.log(request);
          this.setCheckoutStep(4);
        }
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
        this.setCheckoutStep(5);
      }
    }
  }
};
</script>

<template>
  <div>
    <div class="text-h6 font-weight-bold mb-4">Billing Address</div>
    <VRow>
      <VCol sm="6" cols="12">
        <VTextField
          :value="getUser.firstname"
          :rules="textRules"
          color="green"
          label="First Name"
          hide-details="auto"
          dense
          outlined
          @input="
            (e) => {
              updateUser({ value: e, key: 'firstname' });
            }
          " />
      </VCol>

      <VCol sm="6" cols="12">
        <VTextField
          :value="getUser.lastname"
          :rules="textRules"
          color="green"
          label="Last Name"
          hide-details="auto"
          dense
          outlined
          @input="
            (e) => {
              updateUser({ value: e, key: 'lastname' });
            }
          " />
      </VCol>

      <VCol sm="6" cols="12">
        <VTextField
          v-mask="'###-###-####'"
          :value="getUser.phone"
          :rules="phoneRules"
          color="green"
          label="Phone"
          hide-details="auto"
          dense
          outlined
          return-masked-value
          @input="
            (e) => {
              updateUser({ value: e, key: 'phone' });
            }
          " />
      </VCol>

      <VCol sm="6" cols="12">
        <VTextField
          :value="getUser.email"
          :rules="emailRules"
          color="green"
          label="Email"
          hide-details="auto"
          dense
          outlined
          @input="
            (e) => {
              updateUser({ value: e, key: 'email' });
            }
          "></VTextField>
      </VCol>

      <VCol sm="6" cols="12">
        <VTextField
          :value="getUser.details.addressInformation.address1"
          :rules="textRules"
          color="green"
          label="Address 1"
          hide-details="auto"
          dense
          outlined
          @input="
            (e) => {
              updateUser({ value: e, key: 'address1' });
            }
          " />
      </VCol>

      <VCol sm="6" cols="12">
        <VTextField
          :value="getUser.details.addressInformation.address2"
          color="green"
          label="Address 2"
          hide-details="auto"
          dense
          outlined
          @input="
            (e) => {
              updateUser({ value: e, key: 'address2' });
            }
          " />
      </VCol>

      <VCol md="4" cols="12">
        <VTextField
          :value="getUser.details.addressInformation.city"
          :rules="textRules"
          color="green"
          label="City"
          hide-details="auto"
          dense
          outlined
          @input="
            (e) => {
              updateUser({ value: e, key: 'city' });
            }
          " />
      </VCol>

      <VCol md="4" cols="12">
        <VTextField
          :value="getUser.details.addressInformation.state"
          :rules="textRules"
          color="green"
          label="State"
          hide-details="auto"
          dense
          outlined
          @input="
            (e) => {
              updateUser({ value: e, key: 'state' });
            }
          " />
      </VCol>

      <VCol md="4" cols="12">
        <VTextField
          :value="getUser.details.addressInformation.zipcode"
          :rules="textRules"
          color="green"
          label="Zip"
          hide-details="auto"
          dense
          outlined
          @input="
            (e) => {
              updateUser({ value: e, key: 'zipcode' });
            }
          " />
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
          <div class="d-sm-flex align-center justify-space-between">
            <div class="d-sm-flex align-center">
              <div>
                <VRadio value="paypal">
                  <template #label>
                    <strong class="black--text">PayPal</strong>
                  </template>
                </VRadio>
              </div>

              <div class="grey--text ml-sm-4 mt-sm-0 mt-4">
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
        :ripple="false"
        @click="paymentMethod = 'creditCard'">
        <VCardText>
          <div>
            <div class="d-sm-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <div>
                  <VRadio color="green" value="creditCard">
                    <template #label>
                      <strong class="black--text">Pay with Credit Card</strong>
                    </template>
                  </VRadio>
                </div>
              </div>

              <div class="d-flex flex-wrap align-center my-sm-0 my-4">
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
            <VForm v-model="creditCardFormValidation">
              <VRow>
                <VCol sm="6" cols="12">
                  <VTextField
                    v-model="creditCardHolderFirstName"
                    :rules="textRules"
                    color="green"
                    label="Card Holder First Name"
                    hide-details="auto"
                    dense
                    outlined />
                </VCol>
                <VCol sm="6" cols="12">
                  <VTextField
                    v-model="creditCardHolderLastName"
                    :rules="textRules"
                    color="green"
                    label="Card Holder Last Name"
                    hide-details="auto"
                    dense
                    outlined />
                </VCol>
                <VCol sm="6" cols="12">
                  <VTextField
                    v-model="creditCardNumber"
                    v-mask="'####-####-####-####'"
                    :rules="creditCardRules.number"
                    color="green"
                    label="Card Number"
                    hide-details="auto"
                    dense
                    outlined />
                </VCol>
                <VCol sm="6" cols="12">
                  <VTextField
                    v-model="creditCardExpireDate"
                    v-mask="'##/##'"
                    :rules="creditCardRules.expireDate"
                    color="green"
                    label="Expiration Date"
                    hide-details="auto"
                    dense
                    outlined />
                </VCol>
                <VCol sm="6" cols="12">
                  <VTextField
                    v-model="creditCardCvc"
                    v-mask="'###'"
                    :rules="creditCardRules.cvc"
                    color="green"
                    label="Card Security Code"
                    hide-details="auto"
                    dense
                    outlined />
                </VCol>
              </VRow>
            </VForm>
          </div>
        </VCardText>
      </VCard>
    </VRadioGroup>

    <VRow class="mt-8">
      <VCol cols="6">
        <VBtn elevation="0" @click="setCheckoutStep(2)">
          <VIcon left>fas fa-arrow-left</VIcon>
          Prev
        </VBtn>
      </VCol>
      <VCol cols="6" class="text-right">
        <VBtn
          color="green"
          elevation="0"
          :dark="creditCardFormValidation"
          :disabled="!creditCardFormValidation"
          @click="nextStep()">
          Next
          <VIcon right>fas fa-arrow-right</VIcon>
        </VBtn>
      </VCol>
    </VRow>
  </div>
</template>
