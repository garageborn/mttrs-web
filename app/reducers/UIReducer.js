import { OPEN_MODAL } from '../constants/ActionTypes'

let defaultState = {
  modal: {
    isOpen: false,
    type: '',
    content: {}
  }
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: true,
          modalType: action.modalType,
          content: action.content
        }
      }
    default:
      return state
  }
}
