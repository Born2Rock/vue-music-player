import { createPinia } from 'pinia';
import { createApp, h, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';

import App from './app/Index.vue';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: __API__,
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(createPinia()).mount('#app');
