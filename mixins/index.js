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
    ]),

    orderTracking() {
      const data = {
        ORDERNO: this.getOrderId,
        total: this.getTotalPrice,
        products: this.getCartOrderDetails.map((item) => {
          return {
            id: item.product.productId,
            name: item.product.name,
            brand: `Terry's Florist`,
            variant: item.product.sku_type,
            price: item.product.price
          };
        })
      };

      // eslint-disable-next-line
      gtag('event', 'purchase', {
        transaction_id: data.ORDERNO,
        affiliation: 'Terrys Store',
        value: Number(data.total),
        items: data.products
      });
      let margin = 0;
      // eslint-disable-next-line
      if (data.total) {
        margin = Number(data.total) * 0.37;
        margin = parseFloat(margin).toFixed(2);
      }

      // eslint-disable-next-line
      gtag('event', 'conversion', {
        send_to: 'AW-625352542/b6kbCNfksdMBEN6-mKoC',
        value: Number(margin),
        currency: 'USD'
      });
      // bing
      // eslint-disable-next-line
      pintrk(
        'track',
        'checkout',
        {
          value: data.total,
          order_quantity: 1,
          currency: 'USD',
          product_ids: ['1414', '1415']
        },
        function (didInit, error) {
          if (!didInit) {
            // eslint-disable-next-line
            console.log(error);
          }
        }
      );
      // eslint-disable-next-line
      fbq(
        'track',
        'Purchase',
        // begin parameter object data
        {
          value: Number(data.total),
          currency: 'USD',
          order_id: String(data.ORDERNO)
        }
        // end parameter object data
      );
      // eslint-disable-next-line
      snaptr('track', 'PURCHASE', {
        currency: 'USD',
        price: Number(data.total),
        transaction_id: String(data.ORDERNO)
      });

      // pinterest tag
      // eslint-disable-next-line
      pintrk('load', '2614225142777', { em: '<user_email_address>' });
      // eslint-disable-next-line
      pintrk('page');

      // facebook pixel code
      // eslint-disable-next-line
      fbq('init', '350981376316085');
      // eslint-disable-next-line
      fbq('track', 'PageView');

      // snap pixel code
      // eslint-disable-next-line
      snaptr('init', '40139a4a-ad0a-41bd-9669-e40ce9dafbc7', { user_email: 'example@example.com' });
      // eslint-disable-next-line
      snaptr('track', 'PAGE_VIEW');
    }
  }
};

export default mixin;
