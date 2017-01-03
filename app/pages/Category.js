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
    if (nextProps.section.model.slug !== this.props.section.model.slug) {
      this.updateSection(nextProps)
    }
  }

  render () {
    const queryVariables = {categorySlug: this.props.section.model.slug}
    const options = {renderCategory: false}
    return (
      <Layout {...this.meta()}>
        <Header />
        <TimelineContainer queryVariables={queryVariables} options={options} />
      </Layout>
    )
  }

  updateSection (props) {
    this.props.dispatch(UIActions.updateSection(props.section))
  }

  meta () {
    const { category, loading } = this.props.data
    const { formatMessage } = this.props.intl
    if (loading) return {}

    return {
      title: formatMessage(messages.pageTitle, { name: category.name }),
      description: category.name // todo
    }
  }
}

Category.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  }),
  section: PropTypes.shape({
    type: PropTypes.string,
    model: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string
    })
  }).isRequired,
  data: PropTypes.shape({
    category: PropTypes.object,
    loading: PropTypes.bool
  }),
  dispatch: PropTypes.func.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    section: ownProps.route.section
  }
}

const CategoryWithIntl = injectIntl(Category)
const CategoryWithRedux = connect(mapStateToProps)(CategoryWithIntl)
export default withQuery(CategoryWithRedux)
