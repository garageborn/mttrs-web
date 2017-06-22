import { SHOW_ONBOARDING, CLOSE_MODAL, ONBOARDING_SHOWN } from '../constants/ActionTypes'
import localForage from 'localforage'

export const showOnboarding = () => ({
  type: SHOW_ONBOARDING
})

export const hideOnboarding = () => ({
  type: CLOSE_MODAL
})

export const onboardingShown = () => ({
  type: ONBOARDING_SHOWN
})

export function getOnboardingStatus () {
  return (dispatch, getState) => {
    if (_server_) return
    return localForage.getItem('onboardingShown', (error, shown) => {
      if (error) return
      if (shown) return dispatch(onboardingShown())
      return dispatch(showOnboarding())
    })
  }
}

export function handleOnboardingFinish () {
  return (dispatch, getState) => {
    localForage.setItem('onboardingShown', true)
    return dispatch(hideOnboarding())
  }
}
