/* global _server_ */
import { StorageActions } from '../actions/index'

export default class ExposeWindowMethods {
  run ({settings, window}) {
    if (_server_) return
    window.dispatch = settings.store.dispatch
    window.StorageActions = StorageActions
  }
}
