import React from "react";
import "../Styles.css";

const EventTable = () => {
  return (
    <div className="card-main">
      <h1> Event Table </h1>
      {error && <p className="error-message">{error.message}</p>}

      <button className="button button-primary">Add Event</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Ticket Price</th>
            <th>Description</th>
            <th>Venue ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.ID}>
              <td>{event.ID}</td>
              <td>{event.title}</td>
              <td>{event.ticketPrice}</td>
              <td>{event.description}</td>
              <td>{event.venueID}</td>
              <td>
                <button className="button button-primary">Update</button>
                <button className="button button-secondary">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2>Add New Event</h2>
            <div className="form-input">
              <input type="text" value={title} placeholder="Title" />
            </div>
            <div className="form-input">
              <input
                type="number"
                value={ticketPrice}
                placeholder="Ticket Price"
              />
            </div>
            <div className="form-input">
              <textarea
                value={description}
                placeholder="Description"
              ></textarea>
            </div>
            <div className="form-input">
              <select value={venueID}>
                <option value="">Select a Venue</option>

                {venues.map((venue) => (
                  <option key={venue.ID} value={venue.ID}>
                    {venue.name}
                  </option>
                ))}
              </select>
            </div>
            <button className="button button-primary">Add Event</button>
          </div>
        </div>
      )}

      {showUpdateModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2>Update Event</h2>
            <div className="form-input">
              <input type="text" value={title} placeholder="Title" />
            </div>
            <div className="form-input">
              <input
                type="number"
                value={ticketPrice}
                placeholder="Ticket Price"
              />
            </div>

            <div className="form-input">
              <textarea
                value={description}
                placeholder="Description"
              ></textarea>
            </div>

            <div className="form-input">
              <select value={venueID}>
                <option value="">Select a Venue</option>
                {venues.map((venue) => (
                  <option key={venue.ID} value={venue.ID}>
                    {venue.name}
                  </option>
                ))}
              </select>
            </div>

            <button className="button button-primary">Update Event</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTable;
