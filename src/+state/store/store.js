import { createStore } from 'redux'
import filmsReducer from '../reducers/reducers'

export default function configureStore(initialState) {
  return createStore(
    filmsReducer
  )
}