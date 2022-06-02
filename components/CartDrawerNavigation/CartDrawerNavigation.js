import CartDrawerNavProduct from '~/components/CartDrawerNavProduct/CartDrawerNavProduct.vue';

export default {
  components: { CartDrawerNavProduct },
  data: () => ({
    cart: [
      {
        img: 'https://terrysflorist.s3.amazonaws.com/images/BF82-11KS.jpg',
        title: 'European Garden Bouquet',
        type: 'Deluxe (As Shown)',
        price: 56.99,
        pcs: 1,
        extras: []
      },
      {
        img: 'https://terrysflorist.s3.amazonaws.com/images/BF45-11KS.jpg',
        title: 'Opulent Orchids - Single',
        type: 'Standard',
        price: 59.99,
        pcs: 1,
        extras: [
          {
            title: 'Medium (stuffed animal)',
            price: 19.99
          }
        ]
      },
      {
        img: 'https://img.teleflora.com/images/o_0/l_flowers:T100-3A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/T100-3A/SereneRetreat',
        title: 'Serene Retreat',
        type: 'Standard',
        price: 59.99,
        pcs: 3,
        extras: [
          {
            title: '3 Balloons (mylar balloons)',
            price: 15.99
          },
          {
            title: 'Small (stuffed animal)',
            price: 9.99
          },
          {
            title: 'Large box (box of chocolates)',
            price: 29.99
          }
        ]
      },
      {
        img: 'https://img.teleflora.com/images/o_0/l_flowers:T100-3A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/T100-3A/SereneRetreat',
        title: 'Traditional Holiday Centerpiece',
        type: 'Deluxe (As Shown)',
        price: 69.99,
        pcs: 1,
        extras: []
      },
      {
        img: 'https://img.teleflora.com/images/o_0/l_flowers:T100-3A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/T100-3A/SereneRetreat',
        title: 'Traditional Holiday Centerpiece',
        type: 'Deluxe (As Shown)',
        price: 69.99,
        pcs: 1,
        extras: []
      }
    ]
  })
};
