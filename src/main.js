import { createApp, h, provide } from 'vue'
import './style.css'
import App from './App.vue'
import { GesturePlugin } from '@vueuse/gesture'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// Create HTTP Link for GraphQL
const httpLink = createHttpLink({
  uri: import.meta.env.DEV ? '/graphql' : import.meta.env.VITE_GRAPHQL_URL
})

// Construct In Memory Cache
const cache = new InMemoryCache({
  addTypename: false
})

// Create New Apollo Client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: import.meta.env.DEV
})

// Create App
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

// Gesture
app.use(GesturePlugin)

// Mount to App
app.mount('#app')
