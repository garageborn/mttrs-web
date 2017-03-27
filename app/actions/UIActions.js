import { OPEN_MODAL, CLOSE_MODAL, OPEN_MENU, CLOSE_MENU, UPDATE_SECTION } from '../constants/ActionTypes'
import { StorageActions } from '../actions/index'
export const openModal = (modalType, content) => ({
  type: OPEN_MODAL,
  modalType,
  content
})

export function closeModal () {
  return (dispatch, getState) => {
    if (getState().UIReducer.type === 'onboarding') dispatch(StorageActions.handleOnboardingFinish())
    return {
      type: CLOSE_MODAL
    }
  }
}

export const openMenu = () => ({
  type: OPEN_MENU
})

export const closeMenu = () => ({
  type: CLOSE_MENU
})

export const updateSection = (section) => ({
  type: UPDATE_SECTION,
  section
})
