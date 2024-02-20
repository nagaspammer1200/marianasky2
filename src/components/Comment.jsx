import React from 'react'
import "../assets/Comment.css"

const Comment = (commentimgurl1,commenter1,comment1) => {
  return (
    <div>
      <div className="commentbody">
        <div className="user">
            <div className="gradient">
                      <img src={commentimgurl1} alt="Profile Picture" />
            </div>
            <div>
                <h6>{commenter1}</h6>
            </div>
        </div>
        <div className="commenttext">
            <p>{comment1}</p>
            <i className="tiny material-icons">thumb_up</i>
        </div>
      </div>
    </div>
  )
}

export default Comment
