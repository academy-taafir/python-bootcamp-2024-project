import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SOSSettingsPage.css";

function SOSSettingsPage() {
    const [familyMembers,  setFamilyMembers] = useState([
        { name: "", phone: "'"},
        { name: "", phone: "'"},
        { name: "", phone: "'"},
    ]);
}

const handleInputChange = (index, field, value) => {
    const updatedMembers = [...familyMembers];
    updatedMembers[index][field] = value;
    setFamilyMembers(updatedMembers);
};
return(
    <div className= "settings-page"> 
    <h1>SOS Settings</h1>
    <form>
        {familyMembers.map((member, index) => (
            <div className= "family-member" key={index}>
                <Input
                type="text"
                placeholder={"Framily Member ${index + 1} Name`"}
            value={member.name}
            onChange={(e) = handleInputChange(index, "name", e.target.value)}
            />
                <Input
                type="tel"
                placeholder={"Phone Number"}
            value={member.phone}
            onChange={(e) = handleInputChange(index, "phone", e.target.value)}
            />
            </div>
        ))}
        <button type= "button" className= "save-button">Save</button>
        </form>
        <Link to="/" className= "save-button">Back to SOS</Link>
        </div>
        );

    }

    export default SOSSettingsPage;
    