import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contact'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
