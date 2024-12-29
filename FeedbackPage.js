//FeedBackPage.js-Fahad
import React, { useState,useEffect } from 'react';
import"./FeedbackPage() {
const [events, setEvents] = useState([]);
const [feedback, setFeedback] = useState({
    eventId:"",
    comments:"",
    rating:0,
    organizerRating:0,
    venueRating:0,
});
useEffect(() => {
    //Mock API call to fetch ; replace with Real API later const  mockEvents = [
    {id :1, name:"Birtday Party"},
    {id :2, name:"Tech Meetup "},
    ];
setEvents(mockEvents);
},[]);
const handleInputChange = (field,value) => {
    setFeedback({...feedback, [field]: value});
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", feedback);
    alert("Feedback Submitted Successfully!");
};
return (
    <div className="feedback-page"></div>
    <h1>event feedback</h1>
<form className="feedback-form" onSubmit={handleSubmit}></form>
<div className="form-group">
    <label>Select Event</label>
    <select
        value={feedback.eventId}
        onChange={(e) => handleInputChange("eventId", e.target.value)}

</div>
<label> Select Event</label>
<select
    value={feedback.eventId}
    onChange={(e) => handleInputChange("eventId", e.target.value)}
    required
    >
    <option value="">Select Event</option>
    {events.map((event) => (
        <option key={event.id} value={event.id}>
            {event.name}
        </option>
    ))}
</select>
</div>
<div className="form-group">
    <label>Overall Rating (1 to 5)</label>
    <input
        type="number"
        min="1"
        max="5"
        value={feedback.rating}
        onChange={(e) => handleInputChange("rating", e.target.value)}
        required
        />
</div>
<div className="form-group">
<label>Organizer Rating (1 to 5)</label>
    <input
        type="number"
        min="1"
        max="5"
        value={feedback.organizerRating}
        onChange={(e) => handleInputChange("organizerRating", e.target.value)}
        required
        />
</div>
<div className="form-group">
<label>Venue Rating (1 to 5)</label>
    <input
        type="number"
        min="1"
        max="5"
        value={feedback.venueRating}
        onChange={(e) => handleInputChange("venueRating", e.target.value)}
    required
        />
</div>
<div className="form-group">
    <label>Additional Comments</label>
    <textarea
        placeholder={"Share Your Experience..."}
        value={feedback.comments}
        onChange={(e) => handleInputChange("comments", e.target.value)}
    required
        <>/textarea>
</div>
<button type="submit"  className="submit-button">
Submit Feedback
</button>
</form>
</div>

