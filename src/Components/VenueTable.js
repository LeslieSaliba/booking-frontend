import React from "react";
import "../Styles.css";
const VenueTable = () => {
  return (
    <div className="card-main">
      <h1> Venue Table </h1>

      {error && <p className="error-message">{error.message}</p>}

      <button className="button button-primary">Add venue</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Capacity</th>
            <th>Image</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue) => (
            <tr key={venue.ID}>
              <td>{venue.ID}</td>
              <td>{venue.name}</td>
              <td>{venue.description}</td>
              <td>{venue.capacity}</td>
              <td>{venue.image}</td>
              <td>{venue.address}</td>
              <td>
                <button className="button button-primary">Update</button>
                <button className="button button-secondary">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Venue Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2>Add Venue</h2>
            <div className="form-input">
              <input
                type="text"
                value={venueName}
                onChange={(e) => setVenueName(e.target.value)}
                placeholder="Venue Name"
              />
            </div>
            <div className="form-input">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
            <div className="form-input">
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Capacity"
              />
            </div>
            <div className="form-input">
              <input type="file" onChange={handleImageChange} />
            </div>
            <div className="form-input">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>

            <button className="button button-primary">Add Venue</button>
          </div>
        </div>
      )}

      {/* Update Venue Modal */}
      {showUpdateModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2>Update Venue</h2>
            <div className="form-input">
              <input
                type="text"
                value={venueName}
                onChange={(e) => setVenueName(e.target.value)}
                placeholder="Venue Name"
              />
            </div>
            <div className="form-input">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
            <div className="form-input">
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Capacity"
              />
            </div>
            <div className="form-input">
              <input type="file" onChange={handleImageChange} />
            </div>
            <div className="form-input">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>

            <button className="button button-primary">Update Venue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenueTable;
