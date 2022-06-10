import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  createPersistedState({
    paths: ['apiToken', 'user']
  })(store);
};
