import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { injectIntl, defineMessages } from 'react-intl'
import TimelineContainer from '../containers/TimelineContainer'
import TagsContainer from '../containers/TagsContainer'
import withQuery from './Category.gql'
import Layout from './Layout'
import Modal from './Modal'
import { UIActions } from '../actions/index'
import LogoSocial from '../assets/social.png'

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
    let { tagSlug, slug } = this.props
    const queryVariables = {
      tagSlug: this.props.tagSlug,
      categorySlug: this.props.slug,
      type: 'category'
    }
    return (
      <Layout {...this.helmet()}>
        <TagsContainer activeTag={tagSlug} slug={slug} />
        <TimelineContainer type='category' queryVariables={queryVariables} />
        <Modal />
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
        { property: 'og:title', content: formattedMessage },
        { property: 'og:description', content: formattedDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: LogoSocial },
        { property: 'og:site', content: 'Matters' }
      ]
    }
  }
}

Category.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  }),
  slug: PropTypes.string.isRequired,
  tagSlug: PropTypes.string,
  data: PropTypes.shape({
    category: PropTypes.object,
    loading: PropTypes.bool
  }),
  dispatch: PropTypes.func.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    slug: ownProps.route.slug,
    tagSlug: ownProps.route.tagSlug
  }
}

const CategoryWithIntl = injectIntl(Category)
const CategoryWithRedux = connect(mapStateToProps)(CategoryWithIntl)
export default withQuery(CategoryWithRedux)
