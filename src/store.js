import { configureStore } from '@reduxjs/toolkit'
import bankReducer from './bank/bankSlice';
export default configureStore({
  reducer: {
    bank:bankReducer,
  },
})