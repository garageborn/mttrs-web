import ReactGA from 'react-ga'

function logPageView (page) {
  ReactGA.set({ page })
  ReactGA.pageview(page)
}

export const gaMiddleware = store => next => action => {
  if (action.type === "@@router/LOCATION_CHANGE") {
    logPageView(action.payload.pathname)
  }

  next(action);
};
