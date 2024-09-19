import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/AboutUs.jsx'
import Contact from './components/ContactUs.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<App />,
//     children:[
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route path='github' element={<Github />} />
    </Route>

  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
