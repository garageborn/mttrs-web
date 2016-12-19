import { OPEN_MODAL, CLOSE_MODAL } from '../constants/ActionTypes'

export const openModal = (modalType, content) => ({
  type: OPEN_MODAL,
  modalType,
  content
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})
