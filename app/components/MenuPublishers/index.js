/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import MenuPublishersItem from '../MenuPublishersItem'
import MenuSearch from '../MenuSearch'
import styles from './styles.css'

class MenuPublishers extends Component {
  constructor () {
    super()
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.state = {
      query: ''
    }
  }
  render () {
    return (
      <div className={styles.container}>
        <MenuSearch handleSearchTerm={this.handleSearchTermt}/>
        <div className={styles.publishers}>
          {this.renderPublishers()}
        </div>
      </div>
    )
  }
  renderPublishers () {
    const { publishers } = this.props
    const queryMatcher = new RegExp(this.state.query, 'i')
    const filteredPublishers = publishers.filter(publisher => publisher.name.match(queryMatcher))
    return filteredPublishers.map((publisher) => <MenuPublishersItem key={publisher.id} publisher={publisher} />)
  }
  handleSearchTerm (e) {
    this.setState({
      query: e.target.value
    })
  }
}

MenuPublishers.propTypes = {
  publishers: PropTypes.array.isRequired
}

export default MenuPublishers
