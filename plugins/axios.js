export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    if (store.state.apiToken) {
      // eslint-disable-next-line
      config.headers.common['Authorization'] = `Bearer ${store.state.apiToken}`;
    }
  });
}
