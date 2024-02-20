import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
const Home = () => {
  return (
    <div>
        <div className="Home">
        <Navbar/>
        <div className="Home1">
          <Main />
        </div>
      </div>
    </div>
  )
}

export default Home