import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from './adminReducers'
import wishlistreducer from './wishlistslice'
import cartreducer from './CartSlice'

const rootReducer = combineReducers({
    admin: adminReducer,
    wishlist:wishlistreducer,
    cart:cartreducer

    
})

export default rootReducer