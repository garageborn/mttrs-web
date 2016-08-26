import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import App from '../containers/App'
import * as CategoryActions from '../../actions/CategoryActions'
import * as PublishersActions from '../../actions/PublishersActions'

class Routes {
  static fetchData({ dispatch }) {
    return [
      dispatch(CategoryActions.getCategories()),
      dispatch(PublishersActions.getPublishers())
    ]
  }

  static all(store) {
    return Actions.create(
      <Scene key='root' hideNavBar={true}>
        { Routes.defaultRoutes() }
      </Scene>
    )
  }

  static defaultRoutes() {
    return [
      <Scene key='home' component={App}/>
    ]
  }
}

export default Routes
