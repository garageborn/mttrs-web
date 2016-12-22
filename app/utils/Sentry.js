export default [
  {
    type: 'text/javascript',
    src: 'https://cdn.ravenjs.com/3.9.1/raven.min.js',
    crossOrigin: 'anonymous'
  },
  {
    type: 'text/javascript',
    innerHTML: "Raven.config('https://b2086d08c0144a8cac94f13d30a578f1@sentry.io/124314').install()"
  }
]
