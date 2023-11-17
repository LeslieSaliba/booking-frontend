import React from "react";
import "../Styles.css";

const ReservationTable = () => {
  return (
    <div className="card-main">
      <h1> Reservation Table </h1>

      {error && <p className="error-message">{error.message}</p>}

      <table className="table">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>User ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Event Title</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.reservationID}>
              <td>{reservation.reservationID}</td>
              <td>{reservation.userID}</td>
              <td>{reservation.fullName}</td>
              <td>{reservation.email}</td>
              <td>{reservation.title}</td>
              <td>{reservation.date}</td>
              <td>{reservation.name}</td>
              <td>
                <button className="button button-secondary">
                  Cancel Reservation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
