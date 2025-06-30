import { useState } from "react"
import "./Form.css"

import trashIcon from "/src/assets/trash.png"

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

                        <div key={item.id} className="input-container">
                            <div className="header">
                                <h2 className="input-header">Experience {index+1}</h2>
                                {active && <button className="del" type="button" onClick={() => handleDelete(item.id)}><img src={trashIcon}></img></button>}
                            </div>
                            <div className="inputs" id="exp-input">
                                <div>
                                    <label htmlFor="companyName">Company Name</label>
                                    <input name="companyName" disabled={!active} onChange={(e) => handleChange(e, index)} value={item.companyName} placeholder="Enter Company" />
                                </div>

                                <div>
                                    <label htmlFor="position">Position</label>
                                    <input name="position" disabled={!active} onChange={(e) => handleChange(e, index)} value={item.position} placeholder="Enter Position" />
                                </div>

                                <div>
                                    <label htmlFor="startDate">Start Date</label>
                                    <input name="startDate" disabled={!active} onChange={(e) => handleChange(e, index)} value={item.startDate} placeholder="Enter Start Date" />
                                </div>

                                <div>
                                    <label htmlFor="endDate">End Date</label>
                                    <input name="endDate" disabled={!active} onChange={(e) => handleChange(e, index)} value={item.endDate} placeholder="Enter End Date" />
                                </div>

                                <div className="textbox">
                                    <label htmlFor="responsibilities">Responsibilities</label>
                                    <textarea name="responsibilities" disabled={!active} onChange={(e) => handleChange(e, index)} value={item.responsibilities} placeholder="Enter Responsibilities" />
                                </div>
                            </div>
                            
                        </div>

                    ); 
                })}
                <div className="change-buttons">
                    {active && <button type="button" onClick={handleAddExperience}>+ Add Experience</button>}
                    {expList.length > 0 && <button type="button" onClick={handleClick}>{active === true ? "Save" : "Edit"}</button>}
                </div>
        </>
    );
}

export default ExpInfoForm; 