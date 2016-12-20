import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { injectIntl, defineMessages } from 'react-intl'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import CloseModal from '../components/CloseModal'
import withQuery from './Category.gql'
import modalStyles from '../styles/modal.css'
import { UIActions } from '../actions/index'
import Layout from './Layout'

const messages = defineMessages({
  pageTitle: { id: 'category.pageTitle' }
})

class Category extends Component {
  constructor () {
    super()
    this.closeModal = this.closeModal.bind(this)
  }

  render () {
    const queryVariables = {categorySlug: this.props.slug}
    const options = {renderCategory: false}
    return (
      <Layout {...this.meta()}>
        <Header />
        <TimelineContainer queryVariables={queryVariables} options={options} />
        {this.renderModal()}
      </Layout>
    )
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

  renderModal () {
    const {UIReducer} = this.props
    return (
      <div>
        <Modal
          isOpen={UIReducer.modal.isOpen}
          contentLabel='Modal'
          className={modalStyles.modal}
          overlayClassName={modalStyles.overlay}
          onRequestClose={this.closeModal}
        >
          {UIReducer.modal.content}
        </Modal>
        {this.renderCloseButton()}
      </div>
    )
  }

  renderCloseButton () {
    const {UIReducer} = this.props

    if (!UIReducer.modal.isOpen) return
    return <CloseModal shoudldShowButton={UIReducer.modal.isOpen} closeModal={this.closeModal} />
  }

  closeModal () {
    this.props.dispatch(UIActions.closeModal())
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
