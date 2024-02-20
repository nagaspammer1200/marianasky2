import React,{useRef,useContext,useState, useEffect} from 'react'
import { db } from '../pages/firebase.js'
import { getDocs,collection } from 'firebase/firestore'
import { ProfileProvider } from '../App.jsx'
import Post from './Post.jsx'
import "../assets/BeachContent.css"

const BeachContent = () => {
  
  const {changeDisplay2} = useContext(ProfileProvider);  
  const [postDetailsList,setPostDetails] = useState([]);
  const postDetails = collection(db,"user1");
  const newPostRef = useRef(null);
  const postRef = useRef(null);
  const connectiionsRef = useRef(null);
  const postDetailsRef = useRef(null);
  const groupsRef = useRef(null);
  const favoritesRef = useRef(null);
  if (changeDisplay2==1){
    newPostRef.current.style.display="block";
    postRef.current.style.display="block";
    connectiionsRef.current.style.display="none";
    postDetailsRef.current.style.display="none";
    groupsRef.current.style.display="none";
    favoritesRef.current.style.display="none";
  }
  if (changeDisplay2==3){
    newPostRef.current.style.display="none";
    postRef.current.style.display="none";
    connectiionsRef.current.style.display="block";
    postDetailsRef.current.style.display="none";
    groupsRef.current.style.display="none";
    favoritesRef.current.style.display="none";
  }
  if (changeDisplay2==4){
    newPostRef.current.style.display="none";
    postRef.current.style.display="none";
    connectiionsRef.current.style.display="none";
    postDetailsRef.current.style.display="block";
    groupsRef.current.style.display="none";
    favoritesRef.current.style.display="none";
  }
  if (changeDisplay2==5){
    newPostRef.current.style.display="none";
    postRef.current.style.display="none";
    connectiionsRef.current.style.display="none";
    postDetailsRef.current.style.display="none";
    groupsRef.current.style.display="block";
    favoritesRef.current.style.display="none";
  }
  if (changeDisplay2==6){
    newPostRef.current.style.display="none";
    postRef.current.style.display="none";
    connectiionsRef.current.style.display="none";
    postDetailsRef.current.style.display="none";
    groupsRef.current.style.display="none";
    favoritesRef.current.style.display="block";
  }


  useEffect(()=>{
    const displayPostDetails = async () => {
      try {
        const data = await getDocs(postDetails);
        const filteredData = data.docs.map((doc)=> ({
          ...doc.data(), id: doc.id,
        }));
        console.log(filteredData)
        setPostDetails(filteredData)
      }
     catch (err){
      console.log("error");
     }
    };

    displayPostDetails();
  },[]);

  return (
      <div>
        <div className="newpost" ref={newPostRef}>
          <h4>New Post</h4>
        </div>

        <div className="post" ref={postRef}>
            {postDetailsList.map((movie) => (
              <div>
                <Post commenter={movie.commenter} postPoster={movie.postposter} comment={movie.comment} postPosterUrl={movie.commenterurl} commentImgUrl={movie.commentimgurl} postImgUrl={movie.postimgurl} profileImgUrl={movie.profileimgurl} profileName={movie.profilename} />
              </div>
            ))}
        </div>
        <div className="connections" ref={connectiionsRef}>
          <div className="socs">
            <h6>Clubs and Societies</h6>
            <ul>
              <a href="#"><li>IEEE SB</li></a>
              <a href="#"><li>ISTE SC</li></a>
              <a href="#"> <li>CSI</li></a>
              <a href="#"> <li>ASME</li></a>
              <a href="#"><li>IEDC</li></a>
              <a href="#"> <li>Dance Club GECB</li></a>
              <a href="#"><li>Fine Arts Club Of GECB</li></a>
            </ul>
          </div>
          <div className="deps">
            <h6>Departments</h6>
            <ul>
              <a href="#"><li>Electrical and Electronics Engineering</li></a>
              <a href="#"><li>Electronics and Communication Engineering</li></a>
              <a href="#"><li>Mechanical Engineering</li></a>
              <a href="#"><li>Information Technology</li></a>
              <a href="#"><li>Civil Engineering</li></a>
            </ul>
          </div>
        </div>

        <div className="friends" ref={postDetailsRef}>
          <div>
              <h6>Friends</h6>
              <ul>
                <a href="#"><li>Mariya Joseph</li></a>
                <a href="#"><li>Indhra Chauhan</li></a>
                <a href="#"> <li>Laaranya Mahesh Lakshmi</li></a>
                <a href="#"> <li>Shaurya Modi</li></a>
                <a href="#"><li>Narendran Bhoskhar</li></a>
              </ul>
          </div>
        </div>
        <div className="groups" ref={groupsRef}>
          <div className="socs">
              <h6>Groups</h6>
              <ul>
              <a href="#"><li>Current Shala EEE 21-25</li></a>
              <a href="#"><li>EEE</li></a>
              <a href="#"> <li>CSI</li></a>
              </ul>
            </div>
        </div>
  
        <div className="favorites" ref={favoritesRef}>Zen</div>
      </div>
    )
}

export default BeachContent
