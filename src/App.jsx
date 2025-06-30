import GenInfoForm from "./components/GenInfoForm"; 
import EduInfoForm from "./components/EduInfoForm";
import ExpInfoForm from "./components/ExpInfoForm"; 
import Resume from "./components/Resume"; 
import { useState } from "react"; 
import './App.css'; 

function App() {

    const [pInfo, setPInfo] = useState({name:"", email:"", phoneNumber:""}); 
    const [educationList, setEducationList] = useState([]);
    const [expList, setExpList] = useState([]); 
    const [section, setSection] = useState("per"); 

    const handleNav = (e) => {
        setSection(e.target.id); 
    }

    return (
        <div className="app-container">
            <div className="forms">
                <div className="nav-container">
                    <button onClick={(e) => handleNav(e)} id="per">Contact</button>
                    <button onClick={(e) => handleNav(e)} id="edu">Education</button>
                    <button onClick={(e) => handleNav(e)} id="exp">Experience</button>
                </div>
                {section === "per" && <div><GenInfoForm pInfo={pInfo} setPInfo={setPInfo} /></div>}
                {section === "edu" && <div><EduInfoForm educationList={educationList} setEducationList={setEducationList}/></div>}
                {section === "exp" && <div><ExpInfoForm expList={expList} setExpList={setExpList}/></div>}
            </div>
            <div className="resume">
                <Resume pInfo={pInfo} educationList={educationList} expList={expList}/>
            </div>
        </div>
    )
}

export default App; 