import {useState} from "react"; 
import "./Resume.css"

function Resume({pInfo, educationList, expList}) {
    return (
        <div className="r">
            <h2 className="name">{pInfo.name}</h2>
            <h2 className="pInfo"> {pInfo.email} | {pInfo.phoneNumber}</h2>
            <h2 className="section-header">Education</h2>
            {educationList.map((item, index) => {
                return (
                    <div key={index}>
                        <h2>{item.schoolName}</h2>
                        <div className="details">
                            <div>{item.program}</div>
                            <div>{item.startDate} - {item.endDate}</div>
                        </div>
                    </div>
                ); 
            })}
            <h2 className="section-header">Experience</h2>
            {expList.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="details">
                            <h2>{item.position}</h2>
                            <div>{item.startDate} - {item.endDate}</div>
                        </div>
                        <h3>{item.companyName}</h3>
                        <p>{item.responsibilities}</p>
                    </div>
                ); 
            })}
        
        </div>
    );


}

export default Resume; 