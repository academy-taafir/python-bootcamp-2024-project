import React, { useState } from "react";
import "./AddEventPage.css";

function AddEventPage() {
    const [event, setEvent] = useState({
        name: "",
        date: "",
        time: "",
        duration: "",
        venue: "",
        description: "",
    });

    const handleInputChange = (field, value) => {
        setEvent({ ...event, [field]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Event Details:", event);
        alert("Event Added Sucessfully!");
    };

    return (
        <div className="add-event-page">
            <h1>Add Event</h1>
            <form className="event-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Event Name</label>
                    <input
                    type ="text"
                    placeholder="Enter event name"
                    value={event.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}required
                />
                </div>
                <div className="form-group">
                    <label>Event Date</label>
                    <input
                    type="date"
                    value={event.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                    <label>Event Time</label>
                    <input
                    type="time"
                    value={event.time}
                    onChange={(e)=> handleInputChange("time", e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input
                    type="text"
                    placeholder="e.g., 2 hours"
                    value={event.duration}
                    onChange={(e) => handleInputChange("venue", e.target.value)}required
                    />
                </div>
                <div className="form-group">
                    <label>Venue</label>
                    <input
                    type="text"
                    placeholder="Enter venue"
                    value={event.venue}
                    onChange={(e) => handleInputChange("venue", e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                    placeholder="Enter event description"
                    value={event.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">
                    Add Event
                </button>
            </form>
        </div>
    );
}
                

export default AddEventPage;            
        
    
