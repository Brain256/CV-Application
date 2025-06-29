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

    return (
        <div className="app-container">
            <div className="forms">
                <div><GenInfoForm pInfo={pInfo} setPInfo={setPInfo} /></div>
                <div><EduInfoForm educationList={educationList} setEducationList={setEducationList}/></div>
                <div><ExpInfoForm expList={expList} setExpList={setExpList}/></div>
            </div>
            <div className="resume">
                <Resume pInfo={pInfo} educationList={educationList} expList={expList}/>
            </div>
        </div>
    )
}

export default App; 