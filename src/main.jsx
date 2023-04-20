import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blog from './components/Blog/Blog';
import JobFeatures from './components/JobFeatures/JobFeatures';
// import Jobcategory from './components/Jobcategory/Jobcategory';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:"/",
        element:<Main></Main>,
        loader: () => fetch('JobCategory.json')
      },
      {
        path: "/",
        element:<JobFeatures></JobFeatures>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applie-job",
        element:<AppliedJob></AppliedJob>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
