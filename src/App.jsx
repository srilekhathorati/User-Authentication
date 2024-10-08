import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/signup'
import Login from './Components/Login'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
