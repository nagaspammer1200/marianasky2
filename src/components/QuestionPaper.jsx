import React from 'react'
import Navbar from './Navbar'
import Electrical from "./Electrical"
import "../assets/QuestionPaper.css"

const QuestionPaper = () => {
  return (
    <div>
      <div className="qpnavbar">
        <Navbar/>
      </div>
      <div className="departmentcontainer">
          <Electrical/>
      </div>
    </div>
  )
}

export default QuestionPaper
