<script>
export default {
  data: () => ({
    formValidation: false,
    autocomplete: null,
    occasions: [
      {
        id: 1,
        title: 'Anniversary',
        options: '{"ftdCode": "ANNIVERSARY", "bloomnetCode": 7}',
        createdAt: '2022-05-29 10:16:54',
        updatedAt: '2022-05-29 10:16:54'
      },
      {
        id: 2,
        title: 'Birthday',
        options: '{"ftdCode": "BIRTHDAY", "bloomnetCode": 3}',
        createdAt: '2022-05-29 10:16:54',
        updatedAt: '2022-05-29 10:16:54'
      },
      {
        id: 3,
        title: 'Business',
        options: '{"ftdCode": "BUSINESS", "bloomnetCode": 4}',
        createdAt: '2022-05-29 10:16:54',
        updatedAt: '2022-05-29 10:16:54'
      },
      {
        id: 4,
        title: 'Funeral',
        options: '{"ftdCode": "FUNERAL", "bloomnetCode": 1}',
        createdAt: '2022-05-29 10:16:54',
        updatedAt: '2022-05-29 10:16:54'
      },
      {
        id: 5,
        title: 'Holiday',
        options: '{"ftdCode": "HOLIDAY", "bloomnetCode": 5}',
        createdAt: '2022-05-29 10:16:54',
        updatedAt: '2022-05-29 10:16:54'
      },
      {
        id: 6,
        title: 'Illness',
        options: '{"ftdCode": "GET_WELL", "bloomnetCode": 2}',
        createdAt: '2022-05-29 10:16:54',
        updatedAt: '2022-05-29 10:16:54'
      },
      {
        id: 7,
        title: 'Others',
        options: '{"ftdCode": "OTHER", "bloomnetCode": 8}',
        createdAt: '2022-05-29 10:16:54',
        updatedAt: '2022-05-29 10:16:54'
      },
      {
        id: 8,
        title: 'Valentines Day',
        options: '{"ftdCode": "MATERNITY", "bloomnetCode": 6}',
        createdAt: '2022-05-29 10:16:54',
        updatedAt: '2022-05-29 10:16:54'
      }
    ],
    useSameAddress: false,
    dateModalValue: false,
    dateModalIndex: 0
  }),

  computed: {
    getIsSameDayDelivery() {
      return (
        this.getCartOrderDetails[this.dateModalIndex].details.timezone &&
        this.getCartOrderDetails[this.dateModalIndex].details.timezone.isSameDayDelivery
      );
    },

    getCurrentDate() {
      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);

      if (this.getIsSameDayDelivery) {
        return today.toISOString();
      } else {
        return tomorrow.toISOString();
      }
    }
  },

  mounted() {},

  methods: {
    useSameAddressMethod() {
      this.useSameAddress = !this.useSameAddress;

      if (this.useSameAddress === true) {
        this.setAllDeliveriesSameAddress({
          delivery: this.getCartOrderDetails[0].delivery,
          deliveryDate: this.getCartOrderDetails[0].delivery_date
        });
      }
    },

    async getZipCode(index) {
      const inputZipCode = this.getCartOrderDetails[index].delivery.zipcode;

      if (inputZipCode && inputZipCode !== '') {
        try {
          const response = await this.$axios.$get(`/api/timezones?zip=${inputZipCode}`);

          this.setOrderZipCode({ index, timezone: response });

          this.dateModalValue = true;
          this.dateModalIndex = index;
        } catch (error) {
          // eslint-disable-next-line
          console.log(error);
          this.updateOrderDelivery({ index, value: '', key: 'zipcode' });
        }
      }
    },

    allowedDates: (val) => {
      return new Date(val).getDay() > 0;
    },

    saveDeliveryDate(e) {
      this.setOrderDeliveryDate({ index: this.dateModalIndex, date: e });
      this.dateModalValue = false;
    },

    findMap(orderIndex) {
      // eslint-disable-next-line

      const input = document.getElementById('searchTextField');
      const options = {
        componenRestrictions: {
          country: 'us'
        },
        fields: ['address_components'],
        types: ['address']
      };

      // eslint-disable-next-line
      this.autocomplete = new google.maps.places.Autocomplete(input, options);

      this.autocomplete.addListener('place_changed', () => {
        const place = this.autocomplete.getPlace();

        if (place && place.address_components) {
          const streetNumber = place.address_components.find(
            (item) => item?.types[0] === 'street_number'
          );

          for (let index = 0; index < place.address_components.length; index++) {
            const local = place.address_components[index];

            switch (local.types[0]) {
              case 'route':
                this.updateOrderDelivery({
                  index: orderIndex,
                  value: `${streetNumber ? streetNumber.long_name + ' ' : ''}${local.long_name}`,
                  key: 'address1'
                });
                break;

              case 'postal_code':
                this.updateOrderDelivery({
                  index: orderIndex,
                  value: local.long_name,
                  key: 'zipcode'
                });
                break;

              case 'administrative_area_level_1':
                this.updateOrderDelivery({
                  index: orderIndex,
                  value: local.short_name,
                  key: 'state'
                });
                break;

              case 'administrative_area_level_2':
                this.updateOrderDelivery({
                  index: orderIndex,
                  value: local.long_name,
                  key: 'city'
                });
                break;

              default:
                break;
            }
          }
        }
      });
    },

    async nextStep() {
      if (this.formValidation) {
        try {
          const request = await this.$axios.$post('/api/orders/orderCreate', this.getCart);

          if (request) {
            this.setOrderId(request.order_id);
            this.setCheckoutStep(3);
          }
        } catch (error) {
          // eslint-disable-next-line
          console.log(error);
        }
      }
    }
  }
};
</script>

<template>
  <div>
    <VForm v-model="formValidation">
      <div
        v-for="(detail, index) in getCartOrderDetails"
        :key="index"
        :class="{ 'mt-8': index !== 0 }">
        <VCard outlined>
          <VContainer>
            <VRow>
              <VCol lg="1" sm="2" cols="3">
                <VImg :src="detail.product.url"></VImg>
              </VCol>

              <VCol lg="7" sm="8" cols="9">
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
                    <span>{{ extra.addOnOptions[0].name }} {{ `(${extra.addOnName})` }}</span>
                    <strong class="d-block pink--text">
                      <span>{{ extra.addOnOptions[0].price }}</span>
                    </strong>
                  </div>
                </div>

                <VCard v-if="detail.delivery_date" class="mt-4" outlined>
                  <VCardText>
                    <strong>Delivery Date:</strong>
                    <span>{{ detail.delivery_date }}</span>
                  </VCardText>
                </VCard>
              </VCol>

              <VCol lg="2" cols="6" class="text-center" align-self="center">
                <div class="black--text text-subtitle-2">Price</div>
                <div class="text-h6 pink--text font-weight-bold">${{ detail.product.price }}</div>
              </VCol>

              <VCol lg="2" cols="6" class="text-center" align-self="center">
                <div class="black--text text-subtitle-2">Subtotal</div>
                <div class="text-h6 pink--text font-weight-bold">
                  ${{
                    (Math.floor(detail.details.productDetails.productPrice * 100) / 100).toFixed(2)
                  }}
                </div>
              </VCol>
            </VRow>
          </VContainer>

          <VDialog v-model="dateModalValue" persistent width="100%" max-width="320">
            <VDatePicker
              :value="getCartOrderDetails[index].delivery_date"
              color="green"
              :min="getCurrentDate"
              :allowed-dates="allowedDates"
              scrollable
              @input="(e) => saveDeliveryDate(e)">
            </VDatePicker>
          </VDialog>

          <VContainer class="py-8">
            <VRow>
              <VCol sm="6" cols="12">
                <VTextField
                  :value="detail.delivery.firstname"
                  :rules="nameRules"
                  color="green"
                  label="Recipient's First Name"
                  hide-details="auto"
                  dense
                  outlined
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'firstname' })" />
              </VCol>

              <VCol sm="6" cols="12">
                <VTextField
                  :value="detail.delivery.lastname"
                  :rules="nameRules"
                  color="green"
                  label="Recipient's Last Name"
                  hide-details="auto"
                  dense
                  outlined
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'lastname' })" />
              </VCol>

              <VCol sm="6" cols="12">
                <VTextField
                  :value="detail.delivery.email"
                  :rules="emailRules"
                  color="green"
                  label="Recipient's Email"
                  hide-details="auto"
                  dense
                  outlined
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'email' })" />
              </VCol>

              <VCol sm="6" cols="12">
                <VTextField
                  v-mask="'###-###-####'"
                  :value="detail.delivery.phone"
                  :rules="phoneRules"
                  color="green"
                  label="Recipient's Phone"
                  hide-details="auto"
                  dense
                  outlined
                  return-masked-value
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'phone' })" />
              </VCol>

              <VCol sm="6" cols="12">
                <VTextField
                  id="searchTextField"
                  :value="detail.delivery.address1"
                  :rules="textRules"
                  color="green"
                  label="Recipient's Address 1"
                  hide-details="auto"
                  dense
                  outlined
                  @keydown="findMap(index)"
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'address1' })" />
              </VCol>

              <VCol sm="6" cols="12">
                <VTextField
                  ref="address2"
                  :value="detail.delivery.address2"
                  :rules="textRules"
                  color="green"
                  label="Recipient's Address 2"
                  hide-details="auto"
                  dense
                  outlined
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'address2' })" />
              </VCol>

              <VCol md="4" cols="12">
                <VTextField
                  :value="detail.delivery.zipcode"
                  :rules="zipcodeRules"
                  color="green"
                  label="Zip/Postal Code"
                  hide-details="auto"
                  dense
                  outlined
                  :append-icon="'fas fa-arrow-right'"
                  @click:append="getZipCode(index)"
                  @input="
                    (e) => {
                      updateOrderDelivery({ index, value: e, key: 'zipcode' });
                    }
                  " />
              </VCol>

              <VCol md="4" cols="12">
                <VTextField
                  :value="detail.delivery.state"
                  :rules="textRules"
                  color="green"
                  label="State"
                  hide-details="auto"
                  dense
                  outlined
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'state' })" />
              </VCol>

              <VCol md="4" cols="12">
                <VTextField
                  :value="detail.delivery.city"
                  :rules="textRules"
                  color="green"
                  label="City"
                  hide-details="auto"
                  dense
                  outlined
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'city' })" />
              </VCol>

              <VCol sm="6" cols="12">
                <VTextField
                  :value="detail.delivery.institution"
                  :rules="textRules"
                  color="green"
                  label="Institution"
                  hide-details="auto"
                  dense
                  outlined
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'institution' })" />
              </VCol>

              <VCol sm="6" cols="12">
                <VTextField
                  :value="detail.delivery.institution_name"
                  :rules="textRules"
                  color="green"
                  label="Institution Name"
                  hide-details="auto"
                  dense
                  outlined
                  @input="
                    (e) => updateOrderDelivery({ index, value: e, key: 'institution_name' })
                  " />
              </VCol>

              <VCol cols="12">
                <VSelect
                  :items="occasions"
                  :value="detail.delivery.occasionId"
                  item-text="title"
                  item-value="id"
                  color="green"
                  label="Occasions"
                  hide-details="auto"
                  dense
                  outlined
                  @change="
                    (e) => {
                      updateOrderDelivery({ index, value: e, key: 'occasionId' });
                      // prettier-ignore
                      updateOrderDelivery({ index, value: occasions.filter((item) => item.id === e)[0].title, key: 'occasion' });
                    }
                  " />
              </VCol>

              <VCol sm="6" cols="12">
                <VTextarea
                  :value="detail.delivery.message"
                  color="green"
                  label="Free Card Message"
                  hide-details="auto"
                  dense
                  outlined
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'message' })" />
              </VCol>

              <VCol sm="6" cols="12">
                <VTextarea
                  :value="detail.delivery.note"
                  color="green"
                  label="Note"
                  hide-details="auto"
                  dense
                  outlined
                  @input="(e) => updateOrderDelivery({ index, value: e, key: 'note' })" />
              </VCol>
            </VRow>

            <template v-if="getCartOrderDetails.length > 1">
              <div v-if="index === 0" class="mt-8">
                <VCheckbox
                  :value="useSameAddress"
                  color="green"
                  hide-details="auto"
                  @click="useSameAddressMethod">
                  <template #label>
                    <div class="text-body-2">Use this address for all shipments</div>
                  </template>
                </VCheckbox>
              </div>
            </template>
          </VContainer>
        </VCard>
      </div>

      <VRow class="mt-8">
        <VCol cols="6">
          <VBtn elevation="0" @click="setCheckoutStep(1)">
            <VIcon left>fas fa-arrow-left</VIcon>
            Prev
          </VBtn>
        </VCol>
        <VCol cols="6" class="text-right">
          <VBtn
            color="green"
            elevation="0"
            :dark="formValidation"
            :disabled="!formValidation"
            @click="nextStep">
            Next
            <VIcon right>fas fa-arrow-right</VIcon>
          </VBtn>
        </VCol>
      </VRow>
    </VForm>
  </div>
</template>
