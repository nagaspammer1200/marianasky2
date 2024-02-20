import React,{useState,useContext,useRef, useEffect} from 'react'
import { db} from '../pages/firebase.js'
import { getDocs,collection } from 'firebase/firestore'
import { ProfileProvider } from '../App.jsx'
import "../assets/BeachNavbar.css"

const BeachNavbar = () => {
    const {setChangeDisplay2} = useContext(ProfileProvider);
    const [menuValue, setMenuValue] = useState(false);
    const [userList,setUserList] = useState([]);
    const hiddenRef = useRef(null);
    const userDetails = collection(db,"users")
    const displaySettings = () => {
        setMenuValue(!menuValue) 
        if (menuValue==true){
            hiddenRef.current.style.display="block";
        }
        else if (menuValue ==false) {
            hiddenRef.current.style.display="none";
        }
    }
     useEffect(()=> {
        const userInformation = async () => {
            try {
              const data1 = await getDocs(userDetails);
              const filteredData1 = data1.docs.map((doc)=> ({
                ...doc.data(), id: doc.id,
              }));
              console.log(filteredData1)
              setUserList(filteredData1)
            }
           catch (err){
            console.log("error");
           }
          };
          userInformation();
     },[])
    const handleChange1 =() => {
        setChangeDisplay2(1);
    }
    const handleChange3 =() => {
        setChangeDisplay2(3);
    }
    const handleChange5 =() => {
        setChangeDisplay2(5);
    }
    const handleChange6 =() => {
        setChangeDisplay2(6);
    }
  return (
    <div>
        <div className="content">
            <div className="list">
                <div onClick={handleChange1}><i className="material-icons">home</i ><h6>Home</h6></div>
                <div onClick={handleChange3}><i className="material-icons">assistant</i><h6>Connections</h6></div>
                <div onClick={handleChange5}><i className="material-icons">group</i><h6>Groups</h6></div>
                <div onClick={handleChange6}><i className="material-icons">favorite</i><h6>Favourite</h6></div>
            </div>
            <div className="logout">
                <div className="listoptions right" ref={hiddenRef}>
                    <ul>
                        <li><a href="/"><i className='material-icons Tiny'>close</i><span>Logout</span></a></li>
                    </ul>
                </div>
                <div className="profilepreview">
                    <div><i className="settings-btn material-icons" onClick={displaySettings}>settings</i></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BeachNavbar
