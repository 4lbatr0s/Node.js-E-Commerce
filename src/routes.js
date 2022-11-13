import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, useNavigate, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { redirect } from 'react-router-dom';
import Success from './pages/Success';
import React from 'react'


const projectRouter = createBrowserRouter(
    
    createRoutesFromElements(
        <>
            <Route
                path='/'
                element={<Homepage />}
            />
            {/* <Route //INFO: How to use CONDITIONAL ROUTING!
                path="register"
                element={true ? (
                    <Navigate replace to={"/"}></Navigate>
                ) : (<Register />)}
            /> */}
                <Route //INFO: We control current user in Register component from now.
                path="register"
                element = {<Register />}
            />
            <Route
                path="products/:category"
                element={<ProductList />}
            />
            <Route
                path="product/:id"
                element={<Product />}
            />
            {/* <Route
                path="login"
                element={CurrentUser() ? (
                    <Navigate replace to={"/"} />
                ) : (<Login />)}
            /> */}
            <Route
                path="login"
                element={<Login />}
            />
            <Route
                path="cart"
                element={<Cart />}
            />
            <Route
                path="success"
                element={<Success />}
            />
        </>
    )
);

export default projectRouter;