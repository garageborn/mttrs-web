import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { injectIntl, defineMessages } from 'react-intl'
import Modal from 'react-modal'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import withQuery from './Category.gql'
import CloseModal from '../components/CloseModal'
import { MODAL_STYLES } from '../constants/ModalStyles'

const messages = defineMessages({
  pageTitle: { id: 'category.pageTitle' }
})

class Category extends Component {
  render () {
    const queryVariables = {categorySlug: this.props.slug}
    const options = {renderCategory: false}
    const {UIReducer, dispatch} = this.props
    return (
      <div>
        <Helmet {...this.helmet()} />
        <Header />
        <TimelineContainer queryVariables={queryVariables} options={options} />
        <Modal
          isOpen={UIReducer.modal.isOpen}
          contentLabel='Modal'
          style={MODAL_STYLES}
        >
          {UIReducer.modal.content}
          <CloseModal dispatch={dispatch} />
        </Modal>
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

Category.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  }),
  UIReducer: PropTypes.shape({
    modal: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired
    })
  }),
  slug: PropTypes.string.isRequired,
  data: PropTypes.shape({
    category: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  }),
  dispatch: PropTypes.func.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    slug: ownProps.route.slug,
    UIReducer: state.UIReducer
  }
}

const CategoryWithIntl = injectIntl(Category)
const CategoryWithRedux = connect(mapStateToProps)(CategoryWithIntl)
export default withQuery(CategoryWithRedux)
