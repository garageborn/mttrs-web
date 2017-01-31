import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { injectIntl, defineMessages } from 'react-intl'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import withQuery from './Category.gql'
import Layout from './Layout'
import { UIActions } from '../actions/index'

const messages = defineMessages({
  pageTitle: { id: 'category.pageTitle' }
})

class Category extends Component {
  componentDidMount () {
    this.updateSection(this.props)
  }

  componentWillReceiveProps (nextProps) {
    let loadingWillChange = this.props.data.loading !== nextProps.data.loading
    let nextWillNotBeLoading = nextProps.data.loading === false
    if (loadingWillChange && nextWillNotBeLoading) {
      this.updateSection(nextProps)
    }
  }

  render () {
    const queryVariables = {categorySlug: this.props.slug}
    const options = {renderCategory: false}
    return (
      <Layout {...this.helmet()}>
        <Header />
        <TimelineContainer type='category' queryVariables={queryVariables} options={options} />
      </Layout>
    )
  }

  updateSection (props) {
    if (props.data.loading) return
    let section = {
      type: 'category',
      model: props.data.category
    }
    this.props.dispatch(UIActions.updateSection(section))
  }

  helmet () {
    const { category, loading } = this.props.data
    const { formatMessage } = this.props.intl

    if (loading) return {}

    const formattedMessage = formatMessage(messages.pageTitle, { name: category.name })
    const formattedDescription = category.name

    return {
      title: formattedMessage,
      description: formattedDescription,
      metas: [
        { name: 'og:title', content: formattedMessage },
        { name: 'og:description', content: formattedDescription }
      ]
    }
  }
}

Category.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  }),
  slug: PropTypes.string.isRequired,
  data: PropTypes.shape({
    category: PropTypes.object,
    loading: PropTypes.bool
  }),
  dispatch: PropTypes.func.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    slug: ownProps.route.slug
  }
}

const CategoryWithIntl = injectIntl(Category)
const CategoryWithRedux = connect(mapStateToProps)(CategoryWithIntl)
export default withQuery(CategoryWithRedux)
