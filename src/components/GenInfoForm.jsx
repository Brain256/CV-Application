import { useState } from "react"; 
import "./Form.css"

function GenInfoForm({pInfo, setPInfo}) {

    const [active, setActive] = useState(true); 

    const handleChange = (event) => {
        const {name, value} = event.target; 
        const newInfo = {...pInfo}; 
        newInfo[name] = value; 
        setPInfo(newInfo); 
    }

    const handleClick = () => {
        setActive(!active); 
    }

    return (
        <>
            <h1>Personal Info</h1>
            <input disabled = {!active} name="name" placeholder="Enter Name" value = {pInfo.name} onChange={handleChange}></input>
            <input disabled = {!active} name="email" placeholder="Enter Email" value = {pInfo.email} onChange={handleChange}></input>
            <input disabled = {!active} name="phoneNumber" placeholder="Enter Phone Number" value = {pInfo.phoneNumber} onChange={handleChange}></input>
            <button type="button" onClick={handleClick}>{active === true ? "Save" : "Edit"}</button>
        </>
    ); 
}

export default GenInfoForm; 