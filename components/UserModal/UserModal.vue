<script src="./UserModal.js"></script>

<template>
  <div>
    <VDialog :value="getUserModal.active" max-width="1200px" @input="setUserModal">
      <VCard>
        <VRow no-gutters>
          <VCol cols="6" class="d-md-block d-none">
            <VImg src="/images/bg-4-small.jpg" height="100%"></VImg>
          </VCol>

          <VCol md="6" cols="12">
            <VContainer fluid>
              <div class="pa-md-8 px-4 py-8">
                <VRow>
                  <VCols cols="6">
                    <VImg src="/images/logo.webp" width="200"></VImg>
                  </VCols>
                  <VSpacer></VSpacer>
                  <VCols cols="6" class="text-right">
                    <VBtn icon @click="setUserModal({ active: false })">
                      <VIcon>fas fa-times</VIcon>
                    </VBtn>
                  </VCols>
                </VRow>
              </div>

              <div class="pa-md-8 px-4 py-4">
                <h3 class="text-h4 font-weight-bold mt-4">Hello, welcome back!</h3>

                <!-- Sign in side -->
                <div v-if="getUserModal.type === 'sign_in'">
                  <p class="mt-8 text-body-2">Sign in to manage your account.</p>

                  <VTextField class="mt-4" label="Email" hide-details="auto" outlined></VTextField>

                  <VTextField
                    class="mt-4"
                    label="Password"
                    type="password"
                    hide-details="auto"
                    outlined></VTextField>

                  <div class="text-right mt-4">
                    <VBtn text small plain>Forgot Password?</VBtn>
                  </div>

                  <VBtn color="green" class="mt-4" block dark>Sign In</VBtn>

                  <div class="mt-8">
                    Don't have an account?
                    <a
                      href="#"
                      class="font-weight-bold text-decoration-none black--text"
                      @click.prevent="setUserModal({ active: true, type: 'sign_up' })">
                      Sign Up
                    </a>
                  </div>
                </div>
                <!-- ## Sign in side -->

                <!-- Sign up side -->
                <div v-else-if="getUserModal.type === 'sign_up'">
                  <p class="mt-8 text-body-2">Sign up to manage your account.</p>

                  <VTextField class="mt-4" label="Email" hide-details="auto" outlined></VTextField>

                  <VTextField
                    class="mt-4"
                    label="Password"
                    type="password"
                    hide-details="auto"
                    outlined></VTextField>

                  <VTextField
                    class="mt-4"
                    label="Phone number"
                    hide-details="auto"
                    type="tel"
                    outlined></VTextField>

                  <VBtn color="green" class="mt-4" block dark>Sign Up</VBtn>

                  <div class="mt-8">
                    Already have an account?
                    <a
                      href="#"
                      class="font-weight-bold text-decoration-none black--text"
                      @click.prevent="setUserModal({ active: true, type: 'sign_in' })">
                      Sign In
                    </a>
                  </div>
                </div>
                <!-- ## Sign up side -->
              </div>
            </VContainer>
          </VCol>
        </VRow>
      </VCard>
    </VDialog>
  </div>
</template>
