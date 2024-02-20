import React from 'react'
import "../assets/Comment.css"

const NewComment = () => {
  return (
    <div>
        <div className="commentbody">
          <div className="user">
              <div className="gradient">
                        <img src="zet.jpg" alt="Profile Picture" />
              </div>
              <div>
                  <h6>Zet</h6>
              </div>
          </div>
          <div className="commenttext1">
              <input type="text" />
              <a class="waves-effect waves-light btn-small">Post</a>
          </div>
      </div>
    </div>
  )
}

export default NewComment
