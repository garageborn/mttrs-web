import { OPEN_MODAL, CLOSE_MODAL, OPEN_MENU, CLOSE_MENU, UPDATE_SECTION } from '../constants/ActionTypes'

let defaultState = {
  modal: {
    isOpen: false,
    type: '',
    content: {}
  },
  menu: {
    isOpen: false
  },
  section: {
    name: '',
    model: {}
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
    case CLOSE_MODAL:
      return {
        ...state,
        modal: {
          isOpen: false,
          type: '',
          content: {}
        }
      }
    case OPEN_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          isOpen: true
        }
      }
    case CLOSE_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          isOpen: false
        }
      }
    case UPDATE_SECTION: {
      return {
        ...state,
        section: {
          name: action.section.name,
          model: action.section.model
        }
      }
    }
    default:
      return state
  }
}
