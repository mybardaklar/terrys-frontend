export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    avail: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    imgSize: 260,
  }),
}
