import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './views/About/About';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import AppDevelopment from './views/AppDevelopment/AppDevelopment';
import WebDevelopment from './views/WebDevelopment/WebDevelopment';
import TraningAndProgram from './views/TraningAndProgram/TraningAndProgram';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/appdevelopment",
    element: <AppDevelopment/>
  },
  {
    path: "/webdevelopment",
    element: <WebDevelopment/>
  },
  {
    path: "/tandp",
    element: <TraningAndProgram/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);



