import configureWrapper from './config/configureWrapper'
import configureApollo from './config/configureApollo'
import configureReducers from './config/configureReducers'
import configureRoutes from './config/configureRoutes'

const apolloClient = configureApollo({ssrMode: true})
export default {
  initialize: async (httpClient, { request }) => (
    console.log('-------------initializ222222222e')
    // return {batata: 10}
  ),

  // (optional)
  // User can add his own middleware to this `middleware` list
  reduxMiddleware: () => {
    return [apolloClient.middleware()]
  },

  // Redux reducer
  // (either an object or a function returning an object)
  reducer: () => configureReducers(apolloClient),

  // React-router routes
  // (either a `<Route/>` element or a `function({ store })` returning a `<Route/>` element)
  routes: configureRoutes(),

  // Wraps React page component with arbitrary elements (e.g. <Provider/>, etc; see an example below)
  wrapper: (props) => configureWrapper(apolloClient, props),

  on_store_created ({ reload_reducer }) {
    // (for Webpack users only)
    //
    // client side hot module reload for Redux reducers
    // http://webpack.github.io/docs/hot-module-replacement.html#accept
    if (_development_ && module.hot) {
      // this path must be equal to the path in the `require()` call in `create_store` above
      module.hot.accept('./reducers', reload_reducer)
    }
  }
}
