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
import JobDetails from './components/JobDetails/JobDetails';
import createLoader from './components/Loader/Loader';
import SeeAllJob from './components/SeeAllJob/SeeAllJob';
import Remotes from './components/Remotes/Remotes';
import Onsites from './components/Onsites/Onsites';
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
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      // {
      //   path:"/jobdetaile/:jobdetaileId",
      //   element:<JobDetails></JobDetails>,
      //   loader:({params}) => fetch(`/JobFetures.json/${params.jobdetaileId}`)
      // },
      {
        path:"/jobdetaile/:id",
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('/JobFetures.json')
      },
      {
        path: "/applie-job",
        element:<AppliedJob></AppliedJob>,
        loader: createLoader
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/seeAllJob",
        element:<SeeAllJob></SeeAllJob>,
        loader:() => fetch('/JobFetures.json')
      },
      {
        path:"/seeRemoteJob",
        element:<Remotes></Remotes>,
        loader: createLoader
      },
      {
        path:"/seeOnsiteJob",
        element:<Onsites></Onsites>,
        loader: createLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
