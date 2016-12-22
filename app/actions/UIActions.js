import { OPEN_MODAL, CLOSE_MODAL, OPEN_MENU, CLOSE_MENU } from '../constants/ActionTypes'

export const openModal = (modalType, content) => ({
  type: OPEN_MODAL,
  modalType,
  content
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})

export const openMenu = () => ({
  type: OPEN_MENU
})

export const closeMenu = () => ({
  type: CLOSE_MENU
})
