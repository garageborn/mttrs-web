import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import elementClass from 'element-class'
import { UIActions } from '../../actions/index'
import Header from '../../components/Header'

class HeaderContainer extends Component {
  constructor () {
    super()

    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  render () {
    return (
      <Header
        menu={this.props.menu}
        openMenu={this.openMenu}
        closeMenu={this.closeMenu}
        section={this.props.section}
      />
    )
  }

  openMenu () {
    elementClass(document.body).add('overflowHidden')
    this.props.dispatch(UIActions.openMenu())
  }

  closeMenu () {
    elementClass(document.body).remove('overflowHidden')
    this.props.dispatch(UIActions.closeMenu())
  }
}

HeaderContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  menu: PropTypes.object,
  section: PropTypes.object
}

let mapStateToProps = (state) => ({
  menu: state.UIReducer.menu,
  section: state.UIReducer.section
})

export default connect(mapStateToProps)(HeaderContainer)
