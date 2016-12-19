import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { injectIntl, defineMessages } from 'react-intl'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import withQuery from './Category.gql'

const messages = defineMessages({
  pageTitle: { id: 'category.pageTitle' }
})

class Category extends Component {
  render () {
    const queryVariables = {categorySlug: this.props.slug}
    const options = {renderCategory: false}

    return (
      <div>
        <Helmet {...this.helmet()} />
        <Header />
        <TimelineContainer queryVariables={queryVariables} options={options} />
      </div>
    )
  }

  helmet () {
    const {category, loading} = this.props.data
    const {formatMessage} = this.props.intl
    if (loading) return {}

    return {
      title: formatMessage(messages.pageTitle, { name: category.name }),
      meta: [{name: 'description', content: category.name}] // todo
    }
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    slug: ownProps.route.slug
  }
}

const CategoryWithIntl = injectIntl(Category)
const CategoryWithRedux = connect(mapStateToProps)(CategoryWithIntl)
export default withQuery(CategoryWithRedux)
