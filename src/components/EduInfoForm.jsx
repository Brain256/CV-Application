import { useState } from "react"; 
import "./Form.css"

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
                <div key={item.id}>
                    <input disabled={!active} onChange={(e) => handleChange(e, index)} value={item.schoolName} name="schoolName" placeholder="Enter School Name"></input>
                    <input disabled={!active} onChange={(e) => handleChange(e, index)} value={item.program} name="program" placeholder="Enter Program"></input>
                    <input disabled={!active} onChange={(e) => handleChange(e, index)} value={item.startDate} name="startDate" placeholder="Enter Start Date"></input>
                    <input disabled={!active} onChange={(e) => handleChange(e, index)} value={item.endDate} name="endDate" placeholder="Enter End Date"></input>
                    {active && <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>}
                </div>
                ); 
            })}
            {active === true && <button type="button" onClick={handleAddEducation}>+ Add Education</button>}
            <button type="button" onClick={handleClick}>{active === true ? "Save" : "Edit"}</button>
            
        </>
    ); 
}

export default EduInfoForm; 