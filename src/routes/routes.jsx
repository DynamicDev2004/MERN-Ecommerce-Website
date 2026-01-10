import {  createBrowserRouter } from "react-router";
import App from "../App";
import { Header } from "../components/header";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '*',
    element: <Header/>
  },
  

])