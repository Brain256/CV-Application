import { useState } from "react"; 
import "./Form.css"

import trashIcon from "/src/assets/trash.png"

function EduInfoForm({ educationList, setEducationList }) {

    const [active, setActive] = useState(true); 

    const eduPlaceholder = {
        id: crypto.randomUUID(), 
        schoolName: "", 
        program: "", 
        startDate: "", 
        endDate: "", 
    }

    const handleAddEducation = () => {
        setEducationList((prev) => [...prev, eduPlaceholder]); 
    }

    const handleChange = (event, index) => {
        const { name, value } = event.target;  

        const newList = [...educationList]; 
        newList[index][name] = value; 

        setEducationList(newList); 
    }

    const handleClick = () => {
        setActive(!active); 
    }

    const handleDelete = (id) => {
        setEducationList((prev) => (prev.filter((item) => (item.id !== id))))
    }

    return (
        <>
            <h1>Education</h1>
            
            {educationList.map((item, index) => {
                return (

                    <div key={item.id} className="input-container">
                         <div className="header">
                            <h2 className="input-header">Education {index+1}</h2>
                            {active && <button className="del" type="button" onClick={() => handleDelete(item.id)}><img src={trashIcon}></img></button>}
                        </div>
                        <div className="inputs">
                            <div>
                                <label htmlFor="schoolName">School Name</label>
                                <input disabled={!active} onChange={(e) => handleChange(e, index)} value={item.schoolName} name="schoolName" placeholder="Enter School Name" />
                            </div>
                            <div>
                                <label htmlFor="program">Program</label>
                                <input disabled={!active} onChange={(e) => handleChange(e, index)} value={item.program} name="program" placeholder="Enter Program" />
                            </div>
                            <div>
                                <label htmlFor="startDate">Start Date</label>
                                <input disabled={!active} onChange={(e) => handleChange(e, index)} value={item.startDate} name="startDate" placeholder="Enter Start Date" />
                            </div>
                            <div>
                                <label htmlFor="endDate">End Date</label>
                                <input disabled={!active} onChange={(e) => handleChange(e, index)} value={item.endDate} name="endDate" placeholder="Enter End Date" />
                            </div>
                        </div>
                    </div>

                ); 
            })}
            <div className="change-buttons">
                {active === true && <button type="button" onClick={handleAddEducation}>+ Add Education</button>}
                {educationList.length > 0 && <button type="button" onClick={handleClick}>{active === true ? "Save" : "Edit"}</button>}
            </div>
        </>
    ); 
}

export default EduInfoForm; 