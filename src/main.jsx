import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './Pages/Home/Home.jsx'
import Search from './Pages/Search/Search.jsx'
import { GlobalStyle } from './GlobalStyled.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import Auth from './Pages/Auth/Auth.jsx'
import Profile from './Pages/Profile/Profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <Home />}, 
      {path: "/search/:query", element: <Search />},
      {path: "/profile", element: <Profile />}
    ]
  },
  {
    path: "/auth",
    element: <Auth />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
)
