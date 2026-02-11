import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import { Header } from "../components/header";

import Home from "../pages/Home";

import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound404 from "../pages/NotFound404";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      
      {
        path: "product-details/:id",
        element: <ProductDetails/>,
      },
      {
        path: "products/:category",
        element: <Products/>,
      },
      {
        path: "auth",
        
        children:[
          {
            index: true,
            element: <Navigate to={'login'}/>
          },

          {
            path: "login",
            element: <Login/>

          },
          {
            path: "register",
            element: <Register/>

          },
        ]
      },
     
     
    ],
  },
  {
    path: "*",
    element: <NotFound404/>,
  },
]);
