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
            <div className="inputs">
                <div>
                    <label htmlFor="name">Name</label>
                    <input disabled={!active} name="name" placeholder="Enter Name" value={pInfo.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input disabled={!active} name="email" placeholder="Enter Email" value={pInfo.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input disabled={!active} name="phoneNumber" placeholder="Enter Phone Number" value={pInfo.phoneNumber} onChange={handleChange} />
                </div>
            </div>
            <button type="button" onClick={handleClick}>{active === true ? "Save" : "Edit"}</button>
        </>
    ); 
}

export default GenInfoForm; 