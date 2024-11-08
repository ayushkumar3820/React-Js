import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
// import Home from './Component/Home.jsx';
// import About from './Component/About.jsx';
// import Contact from './Component/Contact.jsx';


const Home = lazy(()=> wait(1000).then(()=>import('./Component/Home.jsx')));
const About = lazy(()=> wait(1000).then(()=>import('./Component/About.jsx')))
const Contact = lazy(()=> wait(1000).then(()=>import('./Component/Contact.jsx')))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // eslint-disable-next-line react/jsx-no-undef
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)