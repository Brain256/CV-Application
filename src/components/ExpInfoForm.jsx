import { useState } from "react"
import "./Form.css"

function ExpInfoForm({expList, setExpList}) {

    const [active, setActive] = useState(true); 

    const expPlaceholder = {
        id:crypto.randomUUID(), 
        companyName: "",
        position:"", 
        responsibilities:"",
        startDate:"",
        endDate:"", 
        active:true
    }

    const handleAddExperience = () => {
        setExpList((prev) => [...prev, expPlaceholder]); 
    }

    const handleChange = (event, index) => {
        const { name, value } = event.target; 

        const temp = [...expList];
        temp[index][name] = value; 

        setExpList(temp); 

    }

    const handleClick = () => {
        setActive(!active); 
    }

    const handleDelete = (id) => {
        setExpList((prev) => prev.filter((item) => (item.id !== id))); 
    }

    return (
        <>
            <h1>Experience</h1>
            {expList.map((item, index) => {
                return (
                <div key={item.id}>
                    <input disabled={!active} onChange = {(e) => handleChange(e, index)} name = "companyName" value = {item.companyName} placeholder="Enter Company"></input>
                    <input disabled={!active} onChange = {(e) => handleChange(e, index)} name = "position" value = {item.position} placeholder="Enter Position"></input>
                    <input disabled={!active} onChange = {(e) => handleChange(e, index)} name = "responsibilities" value = {item.responsibilities} placeholder="Enter Responsibilities"></input>
                    <input disabled={!active} onChange = {(e) => handleChange(e, index)} name = "startDate" value = {item.startDate} placeholder="Enter Start Date"></input>
                    <input disabled={!active} onChange = {(e) => handleChange(e, index)} name = "endDate" value = {item.endDate} placeholder="Enter End Date"></input>
                    {active && <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>}
                </div>
                ); 
            })}
            {active && <button type="button" onClick={handleAddExperience}>+ Add Experience</button>}
            <button type="button" onClick={handleClick}>{active === true ? "Save" : "Edit"}</button>

        </>
    );
}

export default ExpInfoForm; 