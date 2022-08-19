<script>
export default {
  data: () => ({
    formValidation: false,
    autocomplete: null
  }),
  mounted() {},
  methods: {
    findMap() {
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

        for (let index = 0; index < place.address_components.length; index++) {
          const local = place.address_components[index];

          switch (local.types[0]) {
            case 'street_number':
              this.updateUser({ value: local.long_name, key: 'address1' });
              break;
            case 'postal_code':
              this.updateUser({ value: local.long_name, key: 'zipcode' });
              break;

            case 'administrative_area_level_1':
              this.updateUser({ value: local.short_name, key: 'state' });
              break;

            case 'administrative_area_level_2':
              this.updateUser({ value: local.long_name, key: 'city' });
              break;

            default:
              break;
          }
        }
      });
    },

    async nextStep() {
      if (this.formValidation) {
        const customer = await this.$axios.$put('/api/customers', this.getUser);

        if (customer) {
          this.setUser(customer);
          this.setCustomerId(customer.id);
          this.setCheckoutStep(2);
        }
      }
    }
  }
};
</script>

<template>
  <VForm v-model="formValidation">
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
          "></VTextField>
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
          "></VTextField>
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
          "></VTextField>
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
          id="searchTextField"
          :value="getUser.details.addressInformation.address1"
          :rules="textRules"
          color="green"
          label="Address 1"
          hide-details="auto"
          dense
          outlined
          @keydown="findMap"
          @input="
            (e) => {
              updateUser({ value: e, key: 'address1' });
            }
          "></VTextField>
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
          "></VTextField>
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
          "></VTextField>
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
          "></VTextField>
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
          "></VTextField>
      </VCol>

      <VCol cols="6">
        <VBtn to="/" elevation="0">
          <VIcon left>fas fa-circle-xmark</VIcon>
          Cancel
        </VBtn>
      </VCol>
      <VCol cols="6" class="text-right">
        <VBtn
          color="green"
          elevation="0"
          :dark="formValidation"
          :disabled="!formValidation"
          @click="nextStep()">
          Next
          <VIcon right>fas fa-arrow-right</VIcon>
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

<style lang="scss" scoped></style>
