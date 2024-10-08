import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleLogout = () =>{
    axios.get('http://localhost:3000/auth/logout')
    .then(res => {
      if(res.data.status){
        navigate('/login')
      }
    }).catch(err =>{
      console.log(err)
    })
  }
  return (
    <div>Home <br/><br/>
      <button><Link to="/dashboard">Dashboard</Link></button>
      <br /><br/>
      <div className="home-container">
        <div className="overlay">
          <h1>Welcome to Our Website</h1>
          <p>Your journey starts here. Explore and enjoy!</p>
        </div>
      </div><br/>
      <button className="btn" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home