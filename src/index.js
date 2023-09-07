import React, { Children, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';

import Body from './Components/Body';
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import RestaurantMenu from './Components/RestaurantMenu';
//import Grocery from './Components/Grocery';



const Grocery = lazy(()=> import("./Components/Grocery"));

const App = () => {
  return (
    <div className="app">
      <Header />
      
      <Outlet/>
    </div>
  );
}
 const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path: "/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path : "/contact",
        element: <Contact/>
      },
      {
        path : "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense> 
      },
      {
        path : "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ]
  },
  
])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={appRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
