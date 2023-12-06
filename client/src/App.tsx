import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from '@views/Pages/Main/Home';
import AuthLayout from '@views/Layouts/AuthLayout';

function App() {
  return (
    createBrowserRouter(
      createRoutesFromElements(

        <Route path="/" element={<Home />}>

          {/* <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} /> */}
          
          <Route element={<AuthLayout />}>
            <Route
              path="login"
              // element={<Login />}
              // loader={redirectIfUser}
            />
            <Route path="signup" />
          </Route>
        </Route>

      )
    )
  )
}

export default App
