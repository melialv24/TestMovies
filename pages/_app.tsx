import '../styles/globals.css'
import { ApolloClient,InMemoryCache, HttpLink, gql, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000'
  }),
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
