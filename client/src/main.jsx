import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Login from './components/login/Login.jsx';
import Register from './components/login/Register.jsx';
import Success from './components/login/EmailSuccess.jsx';
import PassSuccess from './components/login/PassSuccess.jsx';
import EmailSuccess from './components/login/EmailSuccess.jsx';
import Verified from './components/login/Verified.jsx';
import Reset from './components/login/Reset.jsx';
import Error from './components/utils/Error.jsx'
import Home from './components/Home.jsx'
import Forget from './components/login/Forget.jsx';
// import AfterLogin from './components/login/AfterLogin.jsx';
import DashBoard from './components/dashboard/DashBoard.jsx';
// import MonthlyTotals from './components/dashboard/MonthlyTotals.jsx'
// import YearlyTotals from './components/dashboard/YearlyTotals.jsx'
import PredictionPrice from './components/dashboard/PredictionPrice.jsx';
import HowTo from './components/HowTo.jsx';

const router = createBrowserRouter([
  {
    path : "/error",
    element : <Error />
  },
  {
    path : "/",
    element : <Home /> ,
    errorElement : <Error />  
  },{
    path: "/login",
    element: <Login />,
  },{
    path : "/register",
    element : <Register />,
  },{
    path : "/email-success",
    element : <EmailSuccess />
  },{
    path : "/verify/:token",
    element : <Verified />
  },{
    path : "/forget-pass",
    element : <Forget />,
  },{
    path : '/status',
    element : <Success />
  },{
    path : "/reset/:token",
    element : <Reset />
  },{
    path : "/pass-success",
    element : <PassSuccess />
  },{
    path : "/login-success",
    element : <DashBoard />
  },{
    path : "/dashboard",
    element : <DashBoard />
  },{
    path : "/test",
    element : <PredictionPrice />
  },{
    path : '/how-to',
    element : <HowTo />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
