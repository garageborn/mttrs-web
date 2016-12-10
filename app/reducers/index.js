import apolloClient from '../config/apolloClient'

export {default as routing} from './RouterReducer'
export const apollo = apolloClient.reducer()

export {default as CategoriesReducers} from './CategoriesReducers'
export {default as CurrentCategoryReducer} from './CurrentCategoryReducer'
export {default as FilterReducers} from './FilterReducers'
export {default as PublishersReducers} from './PublishersReducers'
export {default as TimelineReducers} from './TimelineReducers'
