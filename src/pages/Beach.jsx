import React from 'react'
import BeachNavbar from '../components/BeachNavbar'
import BeachContent from '../components/BeachContent'
import "../assets/Beach.css"

const Beach = () => {
  return (
    <div>
      <div className="bodymain">
        <div className="bnv">
          <BeachNavbar/>
        </div>
        <div className="bodycontent">
          <BeachContent/>
        </div>
      </div>
    </div>
  )
}

export default Beach
