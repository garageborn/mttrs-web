import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import dpr from '../utils/Dpr'

const Query = gql`
  query($dpr: Int, $slug: String!) {
    link(slug: $slug) {
      title
      image(dpr: $dpr) { thumb }
      url
      story { id summary }
    }
  }
`

const Mutation = gql`
  mutation createLinkAccess($slug: String!) {
    createLinkAccess(input: { slug: $slug }) {
      link { url }
    }
  }
`

const withQuery = function (Link) {
  return graphql(Query, {
    options (props) {
      return {
        variables: {
          slug: props.params.slug,
          dpr: dpr
        }
      }
    }
  })(Link)
}

const withMutation = function (Link) {
  return graphql(Mutation, {
    props: ({mutate, ownProps}) => ({
      createLinkAccess: () => {
        return mutate({ variables: { slug: ownProps.params.slug } })
      }
    })
  })(Link)
}

export default function (Link) {
  const LinkWithQuery = withQuery(Link)
  return withMutation(LinkWithQuery)
}
