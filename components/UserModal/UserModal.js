export default {
  data: () => ({
    signinInputEmail: '',
    signinInputPassword: '',

    forgotPasswordInputEmail: '',

    signupInputEmail: '',
    signupInputPassword: '',
    signupInputPhone: '',

    signinFormValidation: false,
    forgotPasswordFormValidation: false,
    signupFormValidation: false,

    alertStatus: false,
    alertType: 'success',
    alertMessage: null
  }),

  mounted() {
    if (this.$route.query.signInModal) {
      this.setUserModal({ active: true, type: 'sign_in' });
    }
  },

  methods: {
    // register method
    async signUpMethod() {
      try {
        const request = await this.$axios.$post('/auth/register', {
          email: this.signupInputEmail.trim(),
          password: this.signupInputPassword.trim()
        });

        if (request.response && request.response.data.responseStatus) {
          this.alertStatus = true;
          this.alertType = 'error';
          this.alertMessage = request.response.data.message;
        } else {
          this.alertStatus = true;
          this.alertType = 'success';
          this.alertMessage = 'Successfuly signed up!';
        }
      } catch (error) {
        if (error.response.data.responseStatus) {
          this.alertStatus = true;
          this.alertType = 'error';
          this.alertMessage = error.response.data.message;
        }
      }
    },

    // login method
    async signInMethod() {
      try {
        const request = await this.$axios.$post('/auth/clogin', {
          email: this.signinInputEmail.trim(),
          password: this.signinInputPassword.trim()
        });

        if (request.accessToken) {
          this.setUser(request);
          this.setUserModal({ active: false });
          this.setCartCustomer(request.customer.id);
          window.location.replace('/');
        }
      } catch (error) {
        if (error.response.data.responseStatus) {
          this.alertStatus = true;
          this.alertType = 'error';
          this.alertMessage = error.response.data.message;
        }
      }
    },

    // forgot password method
    async forgotPasswordMethod() {
      try {
        /* eslint-disable */
        const request = await this.$axios.$post('/auth/cForgotPassword', null, {
          params: {
            email: this.forgotPasswordInputEmail.trim()
          }
        });

        this.alertStatus = true;
        this.alertType = 'success';
        this.alertMessage = 'Recovery email successfuly sent.';
      } catch (error) {
        if (error.response.data.responseStatus) {
          this.alertStatus = true;
          this.alertType = 'error';
          this.alertMessage = error.response.data.message;
        }
      }
    }
  }
};
