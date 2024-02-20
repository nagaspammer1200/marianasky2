import React from 'react'
import "../assets/QuestionPaper.css"

const FirstSeries = ({subName,subCode,subLink,subYear}) => {
  return (
    <div>
      <div className="firstseriescard">
         <div className="fssubject"><p>{subName}</p></div>
         <div><p className="fssubjectcode">{subCode}</p></div>
         <div><p className="fssubjectyear">{subYear}</p></div>
         <div className="fslink"><a href={subLink}>Link</a></div>
      </div>
    </div>
  )
}

export default FirstSeries