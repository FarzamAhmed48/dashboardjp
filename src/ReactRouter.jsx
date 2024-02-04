import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails';
import Customer from './Customer';
import Analytics from './Analytics';
import Reviews from './Reviews';
import Foods from './Foods';
import FoodsDetails from './FoodsDetails';
import CustomerDetails from './CustomerDetails';
import Calendar from './Calendar';
import Chat from './Chat';
import Wallet from './Wallet';
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/Order List' element={<OrderList/>} />
            <Route path='/Order Details' element={<OrderDetails/>} />
            <Route path='/Customer' element={<Customer/>} />
            <Route path='/Analystics' element={<Analytics/>} />
            <Route path='/Reviews' element={<Reviews/>} />

            <Route path='/Foods' element={<Foods/>} />
            <Route path='/Food Details' element={<FoodsDetails/>} />
            <Route path='/Customer Details' element={<CustomerDetails/>} />
            <Route path='/Calendar' element={<Calendar/>} />
            <Route path='/Chat' element={<Chat/>} />
            <Route path='/Wallet' element={<Wallet/>} />

        </Route>
    )
)
const ReactRouter = () => {
    return (
        <RouterProvider router={router} />)
}

export default ReactRouter