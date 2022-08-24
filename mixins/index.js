import { mapGetters, mapActions } from 'vuex';

const mixin = {
  data: () => ({
    specialRules: [
      (v) => !!v || 'Field is Required',
      (v) =>
        (v.length > 3 && /^[a-zA-Z-]+$/.test(v)) ||
        'Please use only legal characters and dont use whitespace in text.'
    ],
    transactionPrice: [
      (v) => !!v || 'The amount to be transferred must be greater than 0',
      (v) => v !== 0 || 'Please use a correct Wallet Token'
    ],
    transferRules: [
      (v) => !!v || 'Wallet Token is required!',
      (v) => (v.length !== 0 && v.length === 44) || 'Please use a correct Wallet Token'
    ],
    nameRules: [
      (v) => !!v || 'Field is required.',
      (v) => (v && v.length >= 5) || 'Name at least to be 5 characters.'
    ],
    emailRules: [
      (v) => !!v || 'Please enter a valid email.',
      (v) =>
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(v) ||
        'Please use a valid email address.'
    ],
    passwordRules: [
      (v) => !!v || 'Password field is required.',
      (v) =>
        (v && v.length >= 8 && v.length <= 16) ||
        'Password length must be at least 8 characters and at most 16 characters.'
    ],
    creditCardRules: {
      number: [
        (v) => !!v || 'This field is required.',
        (v) => (v && v.length >= 19) || 'Credit card number length must be at least 16 characters.'
      ],
      expireDate: [
        (v) => !!v || 'This field is required.',
        (v) => (v && v.length >= 5) || 'Please enter a valid date.'
      ],
      cvc: [
        (v) => !!v || 'This field is required.',
        (v) => (v && v.length >= 3) || 'CVC code length must be at least 3 characters.'
      ]
    },
    textRules: [
      (v) => !!v || 'Field is required.',
      (v) => (v && v.length >= 2) || 'Field at least to be 5 characters.'
    ],
    zipcodeRules: [
      (v) => !!v || 'Field is required.',
      (v) => (v && v.length >= 5) || 'Please enter a valid zip code.'
    ],
    phoneRules: [
      (v) => !!v || 'Field is required.',
      (v) => (v && v.length >= 10) || 'Please enter a valid phone number.'
    ],
    identifyRules: [
      (v) => !!v || 'Lütfen Bu Alanı Doldurunuz. ',
      (v) => v.length === 11 || 'Lütfen Geçerli bir telefon numarası giriniz.'
    ],
    numberRules: [
      (v) => !!v || 'Field is required.',
      (v) => /^[0-9]+(\.[0-9]{1,2})?$/gm.test(v) || 'Please enter a valid number.'
    ],
    selectionRules: [
      (v) => !!v || 'Lütfen Bu Alanı Doldurunuz. ',
      (v) => v !== null || 'Lütfen Alan Seçiniz.'
    ],
    fileRules: [(v) => !!v || 'Lütfen Bu Alanı Doldurunuz. ']
  }),
  computed: {
    ...mapGetters([
      'getCartDrawerNav',
      'getCart',
      'getCartOrderDetails',
      'getCartDetails',
      'getCartCustomer',
      'getMobileBottomSheet',
      'getUserModal',
      'getSubtotalPrice',
      'getTotalPrice',
      'getCheckoutStep',
      'getUser',
      'getOrderId'
    ])
  },

  methods: {
    ...mapActions([
      'setCartDrawerNav',
      'setMobileBottomSheet',
      'setUserModal',
      'setCartItem',
      'deleteCartItem',
      'setCartDetail',
      'setCartCustomer',
      'setCheckoutStep',
      'setUser',
      'signOutUser',
      'updateUser',
      'setCustomerId',
      'updateOrderDelivery',
      'setAllDeliveriesSameAddress',
      'setOrderZipCode',
      'setOrderDeliveryDate',
      'setTotalPrice',
      'setOrderId'
    ])
  }
};

export default mixin;
