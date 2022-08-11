<script>
export default {
  layout: 'withoutFixedContainer',

  data: () => ({
    formValidation: false,

    passwordInput: '',
    passwordInput2: '',

    alertStatus: false,
    alertType: 'success',
    alertMessage: null
  }),

  computed: {
    passwordConfirmationRule() {
      return [this.passwordRules, (v) => v === this.passwordInput || 'Passwords must be matched.'];
    }
  },

  methods: {
    async changePasswordMethod() {
      try {
        const fCode = this.$route.query.fCode;

        const request = await this.$axios.$post('/auth/cResetPassword', {
          fCode,
          password: this.passwordInput.trim()
        });

        console.log(request);

        window.location.replace('/?signInModal=true');
      } catch (error) {
        console.log(error);

        if (error.response.data.responseStatus) {
          this.alertStatus = true;
          this.alertType = 'error';
          this.alertMessage = error.response.data.message;
        }
      }
    }
  }
};
</script>

<template>
  <div>
    <VCard>
      <div class="pa-md-8 px-4 py-4">
        <h3 class="text-h4 font-weight-bold">Change Password</h3>

        <VForm v-model="formValidation">
          <p class="mt-8 text-body-2">Set a new password.</p>

          <VAlert
            v-model="alertStatus"
            class="mb-8"
            :type="alertType"
            border="left"
            dismissible
            dense
            text>
            {{ alertMessage }}
          </VAlert>

          <VTextField
            v-model="passwordInput"
            :rules="passwordRules"
            color="green"
            class="mt-4"
            label="New Password"
            type="password"
            hide-details="auto"
            outlined />

          <VTextField
            v-model="passwordInput2"
            :rules="passwordConfirmationRule"
            color="green"
            class="mt-4"
            label="Confirm New Password"
            type="password"
            hide-details="auto"
            outlined />

          <VBtn
            color="green"
            class="mt-4"
            :dark="formValidation"
            :disabled="!formValidation"
            @click="changePasswordMethod">
            Change Your Password
          </VBtn>
        </VForm>
      </div>
    </VCard>
  </div>
</template>
