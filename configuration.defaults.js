module.exports = {
  webpage_server: {
    http: {
      host: '127.0.0.1',
      port: 4003
    }
  },
  web_server: {
    http: {
      host: '127.0.0.1',
      port: 4000
    }
  },
  session_secret_keys: ['stackenblochen'],
  development: {
    webpack: {
      development_server: {
        host: '127.0.0.1',
        port: 4001
      }
    }
  }
}
