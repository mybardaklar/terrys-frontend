<script src="./UserModal.js"></script>

<template>
  <div v-if="!getUser.accessToken">
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
                  <VCol cols="6">
                    <VImg src="/images/logo.webp" width="200" />
                  </VCol>

                  <VSpacer />

                  <VCol cols="6" class="text-right">
                    <VBtn icon @click="setUserModal({ active: false })">
                      <VIcon>fas fa-times</VIcon>
                    </VBtn>
                  </VCol>
                </VRow>
              </div>

              <div class="pa-md-8 px-4 py-4">
                <h3 class="text-h4 font-weight-bold mt-4">Hello, welcome back!</h3>

                <!-- Sign in side -->
                <div v-if="getUserModal.type === 'sign_in'">
                  <VForm v-model="signinFormValidation">
                    <p class="mt-8 text-body-2">Sign in to manage your account.</p>

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
                      v-model="signinInputEmail"
                      :rules="emailRules"
                      color="green"
                      class="mt-4"
                      label="Email"
                      hide-details="auto"
                      outlined />

                    <VTextField
                      v-model="signinInputPassword"
                      :rules="passwordRules"
                      color="green"
                      class="mt-4"
                      label="Password"
                      type="password"
                      hide-details="auto"
                      outlined />

                    <div class="text-right mt-4">
                      <VBtn
                        text
                        small
                        plain
                        @click="setUserModal({ active: true, type: 'forgot_password' })">
                        Forgot Password?
                      </VBtn>
                    </div>

                    <VBtn
                      color="green"
                      class="mt-4"
                      block
                      :dark="signinFormValidation"
                      :disabled="!signinFormValidation"
                      @click="signInMethod">
                      Sign In
                    </VBtn>

                    <div class="mt-8">
                      Don't have an account?
                      <a
                        href="#"
                        class="font-weight-bold text-decoration-none black--text"
                        @click.prevent="setUserModal({ active: true, type: 'sign_up' })">
                        Sign Up
                      </a>
                    </div>
                  </VForm>
                </div>
                <!-- ## Sign in side -->

                <!-- Forgot password side -->
                <div v-if="getUserModal.type === 'forgot_password'">
                  <VForm v-model="forgotPasswordFormValidation">
                    <p class="mt-8 text-body-2">Did you forget your password?</p>

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
                      v-model="forgotPasswordInputEmail"
                      :rules="emailRules"
                      color="green"
                      class="mt-4"
                      label="Email"
                      hide-details="auto"
                      outlined />

                    <VBtn
                      color="green"
                      class="mt-4"
                      block
                      :dark="forgotPasswordFormValidation"
                      :disabled="!forgotPasswordFormValidation"
                      @click="forgotPasswordMethod">
                      Send Recovery Email
                    </VBtn>

                    <div class="mt-8">
                      You have an account?
                      <a
                        href="#"
                        class="font-weight-bold text-decoration-none black--text"
                        @click.prevent="setUserModal({ active: true, type: 'sign_in' })">
                        Sign In
                      </a>
                    </div>
                  </VForm>
                </div>
                <!-- ## Forgot password side -->

                <!-- Sign up side -->
                <div v-else-if="getUserModal.type === 'sign_up'">
                  <VForm v-model="signupFormValidation">
                    <p class="mt-4 text-body-2">Sign up to manage your account.</p>

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
                      v-model="signupInputEmail"
                      :rules="emailRules"
                      color="green"
                      class="mt-4"
                      label="Email"
                      hide-details="auto"
                      outlined></VTextField>

                    <VTextField
                      v-model="signupInputPassword"
                      :rules="passwordRules"
                      color="green"
                      class="mt-4"
                      label="Password"
                      type="password"
                      hide-details="auto"
                      outlined></VTextField>

                    <VTextField
                      v-model="signupInputPhone"
                      v-mask="'###-###-####'"
                      :rules="phoneRules"
                      color="green"
                      class="mt-4"
                      label="Phone number"
                      hide-details="auto"
                      type="tel"
                      outlined
                      return-masked-value></VTextField>

                    <VBtn
                      color="green"
                      class="mt-4"
                      block
                      :dark="signupFormValidation"
                      :disabled="!signupFormValidation"
                      @click="signUpMethod">
                      Sign Up
                    </VBtn>

                    <div class="mt-8">
                      Already have an account?
                      <a
                        href="#"
                        class="font-weight-bold text-decoration-none black--text"
                        @click.prevent="setUserModal({ active: true, type: 'sign_in' })">
                        Sign In
                      </a>
                    </div>
                  </VForm>
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
