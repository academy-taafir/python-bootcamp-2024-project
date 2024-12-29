// Dashboard.js

import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showNotificationWindow, setShowNotificationWindow] = useState(false);

  useEffect(() => {
    // Fetch events from the API
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data.events))
      .catch((err) => console.error("Error fetching events:", err));

    // Fetch notifications from the API
    fetch("/api/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data.notifications))
      .catch((err) => console.error("Error fetching notifications:", err));
  }, []);

  const toggleNotificationWindow = () => {
    setShowNotificationWindow(!showNotificationWindow);
  };

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to the Event Management App</h1>
        <div className="notification-bell" onClick={toggleNotificationWindow}>
          <i className="bell-icon"></i>
          {notifications.length > 0 && (
            <span className="badge">{notifications.length}</span>
          )}
        </div>
      </header>

      {showNotificationWindow && (
        <div className="notification-window">
          <h3>Notifications</h3>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                <p>
                  <strong>{notification.type.toUpperCase()}:</strong>{" "}
                  {notification.message}
                </p>
                <small>
                  {new Date(notification.timestamp).toLocaleString()}
                </small>
              </div>
            ))
          ) : (
            <p>No new notifications</p>
          )}
        </div>
      )}

      <nav className="home-links">
        <a href="/sos" className="nav-link">
          SOS Page
        </a>
        <a href="/feedback" className="nav-link">
          Feedback Page
        </a>
      </nav>

      <section className="event-list">
        <h2>Current Events</h2>
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="event-item">
              <h3>{event.name}</h3>
              <p>
                <strong>Date:</strong> {event.date} | <strong>Time:</strong>{" "}
                {event.time}
              </p>
              <p>
                <strong>Duration:</strong> {event.duration} |{" "}
                <strong>Venue:</strong> {event.venue}
              </p>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p>No events available</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;
