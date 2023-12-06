import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from '@Pages/Main/Home';
import AuthLayout from '@Layouts/AuthLayout';
import MainLayout from '@Layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="about" element={<About />} /> */}
        </Route>

        <Route element={<AuthLayout />}>
          <Route
            path="login"
          // element={<Login />}
          // loader={redirectIfUser}
          />
          <Route path="signup" />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
