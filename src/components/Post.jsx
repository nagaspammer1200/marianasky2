import React,{useRef,useState} from 'react'
import "../assets/BeachContent.css"
import "../assets/Post.css"

const Post = ({commenter,postPoster,comment,commentImgUrl,postPosterUrl,postImgUrl,profileImgUrl,profileName}) => {
  const [commentsValue,setCommentsValue] = useState(false);
  const [likeState,setLikeState] = useState(false);
  const commentsRef = useRef(null);
  const changeLike = () => {
    setLikeState(!likeState);
  }
  const showComments = () => {
    setCommentsValue(!commentsValue);
    if (commentsValue==true){
            commentsRef.current.style.display="block";
        }
    else if (commentsValue ==false) {
            commentsRef.current.style.display="none";
      }
  }
  return (
    <div>
        <div className="postbody">
              <div className="postuser">
                <div className="gradient">
                      <img src={postPosterUrl} alt="Profile Picture" />
                </div>
                <div>
                  <h6>{postPoster}</h6>
                </div>
              </div>
              <div className="postimage">
                <img src={postImgUrl} alt="yona" />
              </div>
              <div className="posticons">
                <div><i className={likeState?"material-icons red-text":"material-icons blue-text"} onClick={changeLike}>thumb_up</i></div>
                <div><i className="material-icons" onClick={showComments}>comment</i></div>
                <div><i className="material-icons">favorite</i></div>
              </div>
              <div className="postcomments" ref={commentsRef}>

                <div className="commentscontainer">
                  <div>
                      <div className="commentbody">
                        <div className="user">
                            <div className="gradient">
                                      <img src={commentImgUrl} alt="Profile Picture" />
                            </div>
                            <div>
                                <h6>{commenter}</h6>
                            </div>
                        </div>
                        <div className="commenttext">
                            <p>{comment}</p>
                            <i className="tiny material-icons">thumb_up</i>
                        </div>
                      </div>
                  </div>
                </div>

                <div>
                  <div className="commentbody">
                    <div className="user">
                      <div className="gradient">
                                <img src={profileImgUrl} alt="Profile Picture" />
                      </div>
                      <div>
                          <h6>{profileName}</h6>
                      </div>
                    </div>
                    <div className="commenttext1">
                        <input type="text" />
                        <a className="waves-effect waves-light btn-small">Post</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Post
