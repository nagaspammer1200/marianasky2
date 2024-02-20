import React, { useState,useRef,useEffect} from 'react'
import { db } from '../pages/firebase.js'
import { getDocs,collection } from 'firebase/firestore'
import FirstSeries from './FirstSeries';
import "../assets/QuestionPaper.css"
import "../assets/Navbar.css"

const Electrical = () => {
  const eeFirstSem = useRef(null);
  const eeSecondSem = useRef(null);
  const eeThirdSem = useRef(null);
  const eeFourthSem = useRef(null);
  const eeFifthSem = useRef(null);
  const eeSixthSem = useRef(null);
  const eeSeventhSem = useRef(null);
  const eeEighthSem = useRef(null);
  const [changeElectricalSem,setChangeElectricalSem] = useState("0");
  const [clickState,setClickState] = useState(false);
  const handleClick = () => {
    setClickState(!clickState);
  }

  const displayElectricalS1 = () => {
    setChangeElectricalSem(1);
  }
  const displayElectricalS2 = () => {
    setChangeElectricalSem(2);;
  }
  const displayElectricalS3 = () => {
    setChangeElectricalSem(3);
  }
  const displayElectricalS4 = () => {
    setChangeElectricalSem(4);
  }
  const displayElectricalS5 = () => {
    setChangeElectricalSem(5);
  }
  const displayElectricalS6 = () => {
    setChangeElectricalSem(6);
  }
  const displayElectricalS7 = () => {
    setChangeElectricalSem(7);
  }
  const displayElectricalS8 = () => {
    setChangeElectricalSem(8);
  }

  if (changeElectricalSem==1) {
    eeFirstSem.current.style.display="block";
    eeSecondSem.current.style.display="none";
    eeThirdSem.current.style.display="none";
    eeFourthSem.current.style.display="none";
    eeFifthSem.current.style.display="none";
    eeSixthSem.current.style.display="none";
    eeSeventhSem.current.style.display="none";
    eeEighthSem.current.style.display="none";
  }
  if (changeElectricalSem==2) {
    eeFirstSem.current.style.display="none";
    eeSecondSem.current.style.display="block";
    eeThirdSem.current.style.display="none";
    eeFourthSem.current.style.display="none";
    eeFifthSem.current.style.display="none";
    eeSixthSem.current.style.display="none";
    eeSeventhSem.current.style.display="none";
    eeEighthSem.current.style.display="none";
  }
  if (changeElectricalSem==3) {
    eeFirstSem.current.style.display="none";
    eeSecondSem.current.style.display="none";
    eeThirdSem.current.style.display="block";
    eeFourthSem.current.style.display="none";
    eeFifthSem.current.style.display="none";
    eeSixthSem.current.style.display="none";
    eeSeventhSem.current.style.display="none";
    eeEighthSem.current.style.display="none";
  }
  if (changeElectricalSem==4) {
    eeFirstSem.current.style.display="none";
    eeSecondSem.current.style.display="none";
    eeThirdSem.current.style.display="none";
    eeFourthSem.current.style.display="block";
    eeFifthSem.current.style.display="none";
    eeSixthSem.current.style.display="none";
    eeSeventhSem.current.style.display="none";
    eeEighthSem.current.style.display="none";
  }
  if (changeElectricalSem==5) {
    eeFirstSem.current.style.display="none";
    eeSecondSem.current.style.display="none";
    eeThirdSem.current.style.display="none";
    eeFourthSem.current.style.display="none";
    eeFifthSem.current.style.display="block";
    eeSixthSem.current.style.display="none";
    eeSeventhSem.current.style.display="none";
    eeEighthSem.current.style.display="none";
  }
  if (changeElectricalSem==6) {
    eeFirstSem.current.style.display="none";
    eeSecondSem.current.style.display="none";
    eeThirdSem.current.style.display="none";
    eeFourthSem.current.style.display="none";
    eeFifthSem.current.style.display="none";
    eeSixthSem.current.style.display="block";
    eeSeventhSem.current.style.display="none";
    eeEighthSem.current.style.display="none";
  }
  if (changeElectricalSem==7) {
    eeFirstSem.current.style.display="none";
    eeSecondSem.current.style.display="none";
    eeThirdSem.current.style.display="none";
    eeFourthSem.current.style.display="none";
    eeFifthSem.current.style.display="none";
    eeSixthSem.current.style.display="none";
    eeSeventhSem.current.style.display="block";
    eeEighthSem.current.style.display="none";
  }
  if (changeElectricalSem==8) {
    eeFirstSem.current.style.display="none";
    eeSecondSem.current.style.display="none";
    eeThirdSem.current.style.display="none";
    eeFourthSem.current.style.display="none";
    eeFifthSem.current.style.display="none";
    eeSixthSem.current.style.display="none";
    eeSeventhSem.current.style.display="none";
    eeEighthSem.current.style.display="block";
  }

  const [semesterFive,setSemesterFive] = useState([]);
  const s5fs = collection(db,"s5eefirstseries");
  const [semesterFiveSS,setSemesterFiveSS] = useState([]);
  const s5ss = collection(db,"s5eesecondseries");
  const [semesterFiveUni,setSemesterFiveUni] = useState([]);
  const s5uni = collection(db,"s5eeuniversity");
  const [semesterSixFS,setSemesterSixFS] = useState([]);
  const s6fs = collection(db,"s6eefirstseries");
  const [semesterSixSS,setSemesterSixSS] = useState([]);
  const s6ss = collection(db,"s6eesecondseries");
  const [semesterSixUni,setSemesterSixUni] = useState([]);
  const s6uni = collection(db,"s6eeuniversity");


  useEffect(()=>{
    const displayQuestions = async () => {
      try {
        const data = await getDocs(s5fs);
        const filteredData = data.docs.map((doc)=> ({
          ...doc.data(), id: doc.id,
        }));
        console.log(filteredData)
        setSemesterFive(filteredData)
      }
     catch (err){
      console.log("error");
     }
    };

    const displayQuestion1 = async () => {
      try {
        const data1 = await getDocs(s5ss);
        const filteredData1 = data1.docs.map((doc)=> ({
          ...doc.data(), id: doc.id,
        }));
        console.log(filteredData1)
        setSemesterFiveSS(filteredData1)
      }
     catch (err){
      console.log("error");
     }
    };

    const displayQuestion2 = async () => {
      try {
        const data2 = await getDocs(s5uni);
        const filteredData2 = data2.docs.map((doc)=> ({
          ...doc.data(), id: doc.id,
        }));
        console.log(filteredData2)
        setSemesterFiveUni(filteredData2)
      }
     catch (err){
      console.log("error");
     }
    };
    const displayQuestion3 = async () => {
      try {
        const data3 = await getDocs(s6fs);
        const filteredData3 = data3.docs.map((doc)=> ({
          ...doc.data(), id: doc.id,
        }));
        console.log(filteredData3)
        setSemesterSixFS(filteredData3)
      }
     catch (err){
      console.log("error");
     }
    };
    const displayQuestion4 = async () => {
      try {
        const data4 = await getDocs(s6ss);
        const filteredData4 = data4.docs.map((doc)=> ({
          ...doc.data(), id: doc.id,
        }));
        console.log(filteredData4)
        setSemesterSixSS(filteredData4)
      }
     catch (err){
      console.log("error");
     }
    };
    const displayQuestion5 = async () => {
      try {
        const data5 = await getDocs(s6uni);
        const filteredData5 = data5.docs.map((doc)=> ({
          ...doc.data(), id: doc.id,
        }));
        console.log(filteredData5)
        setSemesterSixUni(filteredData5)
      }
     catch (err){
      console.log("error");
     }
    };

    displayQuestions();
    displayQuestion1();
    displayQuestion2();
    displayQuestion3();
    displayQuestion4();
    displayQuestion5();
  },[]);
/*
*/

  return (
    <div>
      <div className="semesterlist">
        <div className="hidden-menu black-text">
        <i className="Small material-icons" onClick={handleClick}>dehaze</i>
        </div>
        <ul className={clickState?"newbarulinactive black-text":"newbarul"}>
          <div onClick={displayElectricalS1}><li className="newbarulli">S1</li></div>
          <div onClick={displayElectricalS2}><li className="newbarulli">S2</li></div>
          <div onClick={displayElectricalS3}><li className="newbarulli">S3</li></div>
          <div onClick={displayElectricalS4}><li className="newbarulli">S4</li></div>
          <div onClick={displayElectricalS5}><li className="newbarulli">S5</li></div>
          <div onClick={displayElectricalS6}><li className="newbarulli">S6</li></div>
          <div onClick={displayElectricalS7}><li className="newbarulli">S7</li></div>
          <div onClick={displayElectricalS8}><li className="newbarulli">S8</li></div>
        </ul>
      </div>
      <div className="firstsem" ref={eeFirstSem}>
        <div className="firstseries">
          <h5>First Series Question Papers</h5>
          <FirstSeries/>      
        </div>
        <div className="firstseries">  
          <h5>Second Series Question Papers</h5>
          <FirstSeries/>        
        </div>
        <div className="firstseries">
          <h5>University Question Papers</h5>
          <FirstSeries/>
        </div>
      </div>

      <div className="secondsem" ref={eeSecondSem}>
        <div className="firstseries">
          <h5>First Series Question Papers</h5>
          <FirstSeries/>
        </div>
        <div className="firstseries">  
          <h5>Second Series Question Papers</h5>
          <FirstSeries/>        
        </div>
        <div className="firstseries">
          <h5>University Question Papers</h5>
          <FirstSeries/>
        </div>
      </div>

      <div className="thirdsem" ref={eeThirdSem}>
        <div className="firstseries">
          <h5>First Series Question Papers</h5>
          <FirstSeries/>
        </div>
        <div className="firstseries">  
          <h5>Second Series Question Papers</h5>
          <FirstSeries/>        
        </div>
        <div className="firstseries">
          <h5>University Question Papers</h5>
          <FirstSeries/>
        </div>
      </div>

      <div className="fourthsem" ref={eeFourthSem}>
        <div className="firstseries">
          <h5>First Series Question Papers</h5>
            <FirstSeries/>
        </div>
        <div className="firstseries">  
          <h5>Second Series Question Papers</h5>
          <FirstSeries/>        
        </div>
        <div className="firstseries">
          <h5>University Question Papers</h5>
          <FirstSeries/>
        </div>
      </div>

      <div className="fifthsem" ref={eeFifthSem}>
        <div className="firstseries">
          <h5>First Series Question Papers</h5>
          <div className='firstseriescontainer'>
          {semesterFive.map((movie) => (
              <div>
                <FirstSeries subName={movie.subname} subCode={movie.subcode} subLink={movie.sublink} subYear={movie.subyear}/>
              </div>
            ))}
          </div>
        </div>
        <div className="firstseries">  
          <h5>Second Series Question Papers</h5>
          <div className='firstseriescontainer'>
          {semesterFiveSS.map((movie) => (
              <div>
                <FirstSeries subName={movie.subname} subCode={movie.subcode} subLink={movie.sublink} subYear={movie.subyear}/>
              </div>
            ))}
          </div>        
        </div>
        <div className="firstseries">
          <h5>University Question Papers</h5>
          <div className='firstseriescontainer'>
          {semesterFiveUni.map((movie) => (
              <div>
                <FirstSeries subName={movie.subname} subCode={movie.subcode} subLink={movie.sublink} subYear={movie.subyear}/>
              </div>
            ))}
          </div>    
        </div>
      </div>

      <div className="sixthsem" ref={eeSixthSem}>
        <div className="firstseries">
          <h5>First Series Question Papers</h5>
          <div className='firstseriescontainer'>
          {semesterSixFS.map((movie) => (
              <div>
                <FirstSeries subName={movie.subname} subCode={movie.subcode} subLink={movie.sublink} subYear={movie.subyear}/>
              </div>
            ))}
          </div>
        </div>
        <div className="firstseries">  
          <h5>Second Series Question Papers</h5>
          <div className='firstseriescontainer'>
          {semesterSixSS.map((movie) => (
              <div>
                <FirstSeries subName={movie.subname} subCode={movie.subcode} subLink={movie.sublink} subYear={movie.subyear}/>
              </div>
            ))}
          </div>      
        </div>
        <div className="firstseries">
          <h5>University Question Papers</h5>
          <div className='firstseriescontainer'>
          {semesterSixUni.map((movie) => (
              <div>
                <FirstSeries subName={movie.subname} subCode={movie.subcode} subLink={movie.sublink} subYear={movie.subyear}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="seventhsem" ref={eeSeventhSem}>
        <div className="firstseries">
          <h5>First Series Question Papers</h5>
          <FirstSeries/>
        </div>
        <div className="firstseries">  
          <h5>Second Series Question Papers</h5>
          <FirstSeries/>        
        </div>
        <div className="firstseries">
          <h5>University Question Papers</h5>
          <FirstSeries/>
        </div>
      </div>

      <div className="eighthsem" ref={eeEighthSem}>
        <div className="firstseries">
          <h5>First Series Question Papers</h5>
          <FirstSeries/>
        </div>
        <div className="firstseries">  
          <h5>Second Series Question Papers</h5>
          <FirstSeries/>        
        </div>
        <div className="firstseries">
          <h5>University Question Papers</h5>
          <FirstSeries/>
        </div>
      </div>
    </div>
  )
}

export default Electrical
