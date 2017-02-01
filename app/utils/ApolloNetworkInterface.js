import { HTTPFetchNetworkInterface } from 'apollo-client'
import _isString from 'lodash/isString'
import _trim from 'lodash/trim'
import _mapValues from 'lodash/mapValues'
import { print } from 'graphql-tag/printer'
import queryString from 'query-string'

function printRequest (request) {
  return _mapValues(request, function (val, key) {
    return key === 'query' ? print(val) : val
  })
}

HTTPFetchNetworkInterface.prototype.fetchFromRemoteEndpoint = function (req) {
  const { request, options } = req
  const query = printRequest(request)
  const variables = query.variables || {}

  const headers = Object.assign(
    {},
    { Accept: '*/*', 'Content-Type': 'application/json' },
    options.headers
  )
  const method = options.method || 'POST'
  let uri, body

  if (method === 'POST') {
    uri = this._uri
    body = JSON.stringify(query)
  } else {
    const params = {
      query: query.query.replace(/\r?\n|\r/g, '').replace(/\s+/g, ' '),
      variables: JSON.stringify(variables)
    }
    uri = `${ this._uri }?${ queryString.stringify(params) }`
  }

  return fetch(uri, Object.assign(
    {},
    this._opts,
    { body, method },
    options,
    { headers }
    )
  )
}

function createNetworkInterface(uriOrInterfaceOpts, secondArgOpts) {
    if (secondArgOpts === void 0) { secondArgOpts = {} }
    if (!uriOrInterfaceOpts) {
      throw new Error('You must pass an options argument to createNetworkInterface.')
    }
    let uri
    let opts
    if (_isString(uriOrInterfaceOpts)) {
      console.warn("Passing the URI as the first argument to createNetworkInterface is deprecated as of Apollo Client 0.5. Please pass it as the \"uri\" property of the network interface options.")
      opts = secondArgOpts
      uri = uriOrInterfaceOpts
    } else {
      opts = uriOrInterfaceOpts.opts
      uri = uriOrInterfaceOpts.uri
    }
    return new HTTPFetchNetworkInterface(uri, opts)
}

export default createNetworkInterface
