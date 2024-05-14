import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Layout/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/Providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import Chefscard from './Components/Chefscard/Chefscard';
import Detailschef from './Components/Detailschef/Detailschef';
import Error404 from './Components/Error404/Error404';
import Blogs from './Components/Blogs/Blogs';
import Blogpage from './Components/BlogPage/Blogpage';
import Main from './Components/Main/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Main></Main>,
        loader:()=>fetch(`https://chef-recipe-hunter-server-pearl.vercel.app/chefs`)
        // loader:()=>fetch(`http://localhost:5888/chefs`)
      },
      {
        path:'/chef/:id',
        element:<PrivateRoute><Detailschef></Detailschef></PrivateRoute>,
        loader:({params})=>fetch(`https://chef-recipe-hunter-server-pearl.vercel.app/chefs/${params.id}`)
        // loader:({params})=>fetch(`http://localhost:5888/chefs/${params.id}`)
      },

      {
        path:'/blogs',
        element:<Blogpage></Blogpage>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/*',
        element:<Error404></Error404>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
