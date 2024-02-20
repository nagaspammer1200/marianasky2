import {useRef} from 'react';
import "../assets/Main.css"

const Main = () => {

const ref = useRef(null);
const ref1 = useRef(null);
const ref2 = useRef(null);
    const handleClick = () => {
        ref.current.style.display = 'block';
        ref1.current.style.display = 'none';
        ref2.current.style.display = 'none';
    };
        
    const handleClick1 = () => {
        ref.current.style.display = 'none';
        ref1.current.style.display = 'block';
        ref2.current.style.display = 'none';
      };
      const handleClick2 = () => {
        ref.current.style.display = 'none';
        ref1.current.style.display = 'none';
        ref2.current.style.display = 'none';
      };
      const handleClick3 = () => {
        ref.current.style.display = 'none';
        ref1.current.style.display = 'none';
        ref2.current.style.display = 'block';
      };

  return (

    <div>
        <div className="main-container">
            <div className="col s6 m4">
                <h4 className="header center">Welcome To Mariana Sky</h4>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="sample1.jpg"/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content blue lighten-2">
                            <p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content2">
                <div className="card grey">
                    <div className="card-content">
                    <h4 className="center">Features of Mariana Sky</h4>
                    </div>
                    <div className="card-tabs green">
                        <ul className="tabs tabs-fixed-width">
                            <li className="tab"><a className="active" href="#test4" onClick={handleClick}>What's New</a></li>
                            <li className="tab"><a href="#test5" onClick={handleClick1}>Question Papers</a></li>
                            <li className="tab"><a href="#test7" onClick={handleClick3}>Links</a></li>
                        </ul>
                    </div>

                    <div className="card-content red lighten-3">

                        <div id="test4" ref={ref}>
                            <ul>
                                <li>Details about latest College Events</li>
                                <li>Exam Timetables</li>
                                <li>Intership Periods/Vacation</li>
                                <li>Campus Placement News</li>
                            </ul>
                        </div>
                        <div id="test5" ref={ref1}>
                        <ul>
                                <li>University Previous Year Questions - Supplementary and Regular</li>
                                <li>Series Examination - Retest and Regular</li>
                                <li>Lab Exam Questions - University and College Examination Excel Sheets</li>
                                <li>Placement Questions Company Wise</li>
                            </ul>
                        </div>
                        <div id="test7" ref={ref2}>
                            <h6>Links</h6>
                            <p>This Section is meant to help Students gain access to Education Resources. Students can submit a request to add a Link to this section 
                                by emailing us at support@marianasky.in
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Main
