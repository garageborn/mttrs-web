import { ONBOARDING_SHOWN } from '../constants/ActionTypes'

let defaultState = {
  onboarding: { shown: false }
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case ONBOARDING_SHOWN:
      return {
        ...state,
        onboarding: {
          shown: true
        }
      }
    default:
      return state
  }
}
