import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Query = gql`query { categories(ordered: true) { id name slug color icon_id } }`

export default function(NavContainer) {
  return graphql(Query)(NavContainer)
}
