import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as CategoryActions from '../actions/CategoryActions'
import * as CurrentCategoryActions from '../actions/CurrentCategoryActions'
import * as PublishersActions from '../actions/PublishersActions'
import HeaderContainer from './HeaderContainer'
import TimelineContainer from './TimelineContainer'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
import * as messages from '../common/translations/i18n'
import Tenant from '../common/utils/Tenant'
import Routes from '../config/Routes'
import intl from 'intl'
addLocaleData([...en, ...pt])

class Root extends Component {
  static fetchData({ dispatch, params, route }) {
    let categorySlug = route.categorySlug
    let filter = route.filter

    return [
      dispatch(CurrentCategoryActions.getCategory(categorySlug)),
      TimelineContainer.fetchData.apply(this, arguments)
    ]
  }

  componentWillReceiveProps(nextProps) {
    let categorySlugChanged = nextProps.categorySlug !== this.props.categorySlug
    let publisherSlugChanged = nextProps.publisherSlug !== this.props.publisherSlug
    let filterChanged = nextProps.filter !== this.props.filter
    if (categorySlugChanged || publisherSlugChanged || filterChanged)
      this.constructor.fetchData(nextProps)
  }

  getLanguage() {
    if (Tenant.current === 'mttrs_br') {
      return 'pt'
    } else {
      return 'en'
    }
  }

  render() {
    const language = this.getLanguage()
    const msg = messages[language]

    return (
      <IntlProvider locale={language} defaultLocale='en' messages={msg}>
        <div>
          <HeaderContainer />
          <TimelineContainer />
        </div>
      </IntlProvider>
    )
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    categorySlug: ownProps.route.categorySlug,
    filter: ownProps.route.filter
  }
}

export default connect(mapStateToProps)(Root)
