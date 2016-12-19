import { OPEN_MODAL } from '../constants/ActionTypes'

export const openModal = (modalType, content) => ({
  type: OPEN_MODAL,
  modalType,
  content
})
