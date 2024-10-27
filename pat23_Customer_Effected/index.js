import {createRoot} from 'react-dom/client'
import App from './App.js'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Contact from './components/contact.jsx';
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';
import CountryDetails from './components/CountryDetails';


const  router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/:country',
                element:<CountryDetails/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]

    }
])
const root = createRoot(document.querySelector('#root'))


root.render(<RouterProvider router={router} />)