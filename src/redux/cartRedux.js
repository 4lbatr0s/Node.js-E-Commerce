import {createSlice} from "@reduxjs/toolkit"


//INFO: How to create a slice
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        totalPrice:0
    },
    reducers:{
        addProduct:(state, action) => { //INFO: state: cartSlice's state, action: addProduct itself.
            state.quantity +=1; //cart quantity
            state.products.push(action.payload);//TIP: our new product.
            state.totalPrice += action.payload.price * action.payload.amount; //product quantity
        }
    }
})

export const {addProduct}  = cartSlice.actions
export default cartSlice.reducer //INFO: We use this in the global store.