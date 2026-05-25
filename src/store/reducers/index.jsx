import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from './adminReducers'
import wishlistreducer from './wishlistslice'

const rootReducer = combineReducers({
    admin: adminReducer,
    wishlist:wishlistreducer

    
})

export default rootReducer