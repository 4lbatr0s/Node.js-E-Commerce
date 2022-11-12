import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux"; //INFO: We basically imported cartSlice.reducer value
import userReducer from "./userRedux";

export default configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
    }
})