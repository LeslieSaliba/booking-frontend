import "../Styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getUserID } from "../Util/GetUserData";

function Home() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userReservations, setUserReservations] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/event/getAll");
        setEvents(response.data.data);
      } catch (error) {
        console.log("error fetching events", error);
        setError(error);
      }
    };

    fetchEvents();
    setUserID(getUserID());

    const fetchUserReservations = async () => {
      try {
        const userReservationsResponse = await axios.get(
          `http://localhost:5000/reservation/getByUserID/${userID}`
        );
        setUserReservations(userReservationsResponse.data.data);
      } catch (error) {
        console.log("error fetching user reservations", error);
      }
    };

    if (userID) {
      fetchUserReservations();
    }
  }, [userID]);

  const hasReserved = (eventID) => {
    return userReservations.some(
      (reservation) => reservation.eventID === eventID
    );
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleReserve = async (eventID) => {
    const token = sessionStorage.getItem("authToken");
    const headers = { Authorization: `Bearer ${token}` };
    console.log({
      userID,
      eventID,
    });
    try {
      const reservationResponse = await axios.post(
        "http://localhost:5000/reservation/add",
        {
          userID,
          eventID,
        },
        { headers }
      );
      console.log("Event reservation successful");
      setUserReservations([...userReservations, reservationResponse.data.data]);
    } catch (error) {
      console.log("Event reservation error", error);
      setError(error);
    }
  };

  return (
    <div className="card">
      {error && <p className="error-message">{error.message}</p>}

      <button onClick={handleLogout} className="submit-button">
        Logout
      </button>
      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        events.map((event) => (
          <div key={event.ID} className="card">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <button
              className="button button-primary"
              onClick={() => handleReserve(event.ID)}
              disabled={hasReserved(event.ID)}
            >
              {hasReserved(event.ID) ? "Reserved" : "Reserve"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Home;
