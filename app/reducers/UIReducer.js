import { OPEN_MODAL, CLOSE_MODAL, OPEN_MENU, CLOSE_MENU,
  SHOW_ONBOARDING, UPDATE_SECTION } from '../constants/ActionTypes'

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
    type: '',
    model: {}
  },
  showOnboarding: false
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: true,
          type: action.modalType,
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
        section: action.section
      }
    }
    case SHOW_ONBOARDING: {
      return {
        ...state,
        showOnboarding: true
      }
    }
    default:
      return state
  }
}
