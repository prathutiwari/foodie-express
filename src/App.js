import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from './components/Footer';
import Body from "./components/Body";
// import About from './components/About';
import ContactUs from './components/ContactUs'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/shimmer";
// import Grocery from "./components/Grocery";



const Grocery = lazy(()=> import("./components/Grocery"))
const About = lazy(()=> import("./components/About"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>,
      },
      {
        path: '/about',
        element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
      },
      {
        path: '/contact',
        element: <ContactUs/>,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu/>,
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
      }
    ],
    errorElement:<Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
