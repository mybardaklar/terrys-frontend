<script>
export default {
  data: () => ({}),

  methods: {
    async nextStep() {
      if (this.$refs.billingForm.validate()) {
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
  <VForm ref="billingForm">
    <VRow>
      <VCol cols="6">
        <VTextField
          :value="getUser.firstname"
          :rules="textRules"
          color="green"
          label="First Name"
          hide-details="auto"
          dense
          outlined
          @change="
            (e) => {
              updateUser({ value: e, key: 'firstname' });
            }
          "></VTextField>
      </VCol>

      <VCol cols="6">
        <VTextField
          :value="getUser.lastname"
          :rules="textRules"
          color="green"
          label="Last Name"
          hide-details="auto"
          dense
          outlined
          @change="
            (e) => {
              updateUser({ value: e, key: 'lastname' });
            }
          "></VTextField>
      </VCol>

      <VCol cols="6">
        <VTextField
          v-mask="'###-###-####'"
          :value="getUser.phone"
          :rules="phoneRules"
          color="green"
          label="Phone"
          hide-details="auto"
          dense
          outlined
          @change="
            (e) => {
              updateUser({ value: e, key: 'phone' });
            }
          "></VTextField>
      </VCol>

      <VCol cols="6">
        <VTextField
          :value="getUser.email"
          :rules="emailRules"
          color="green"
          label="Email"
          hide-details="auto"
          dense
          outlined
          @change="
            (e) => {
              updateUser({ value: e, key: 'email' });
            }
          "></VTextField>
      </VCol>

      <VCol cols="6">
        <VTextField
          :value="getUser.details.addressInformation.address1"
          :rules="textRules"
          color="green"
          label="Address 1"
          hide-details="auto"
          dense
          outlined
          @change="
            (e) => {
              updateUser({ value: e, key: 'address1' });
            }
          "></VTextField>
      </VCol>

      <VCol cols="6">
        <VTextField
          :value="getUser.details.addressInformation.address2"
          :rules="textRules"
          color="green"
          label="Address 2"
          hide-details="auto"
          dense
          outlined
          @change="
            (e) => {
              updateUser({ value: e, key: 'address2' });
            }
          "></VTextField>
      </VCol>

      <VCol cols="4">
        <VTextField
          :value="getUser.details.addressInformation.city"
          :rules="textRules"
          color="green"
          label="City"
          hide-details="auto"
          dense
          outlined
          @change="
            (e) => {
              updateUser({ value: e, key: 'city' });
            }
          "></VTextField>
      </VCol>

      <VCol cols="4">
        <VTextField
          :value="getUser.details.addressInformation.state"
          :rules="textRules"
          color="green"
          label="State"
          hide-details="auto"
          dense
          outlined
          @change="
            (e) => {
              updateUser({ value: e, key: 'state' });
            }
          "></VTextField>
      </VCol>

      <VCol cols="4">
        <VTextField
          :value="getUser.details.addressInformation.zipcode"
          :rules="textRules"
          color="green"
          label="Zip"
          hide-details="auto"
          dense
          outlined
          @change="
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
        <VBtn color="green" elevation="0" dark @click="nextStep()">
          Next
          <VIcon right>fas fa-arrow-right</VIcon>
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
