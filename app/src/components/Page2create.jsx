// components/Page2Create.jsx
import React from 'react';
import './Page2create.css';

const Page2Create = () => {
  return (
    <div className="create-event-wrapper">
      <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white shadow-sm">
        <h3 className="m-0 fw-bold">Event <span className="text-purple">Hive</span></h3>
        <div>
          <button className="btn btn-link text-dark me-2">Login</button>
          <button className="btn btn-purple">Signup</button>
        </div>
      </header>

      <main className="container py-5">
        <h2 className="text-center fw-bold mb-5">Create Event</h2>

        <form className="event-form">
          <input className="form-control" placeholder="Event Title" />
          <input className="form-control" placeholder="Event Venue" />

          <div className="d-flex flex-column flex-md-row gap-3">
            <input className="form-control" placeholder="Start time" />
            <input className="form-control" placeholder="End time" />
          </div>

          <div className="d-flex flex-column flex-md-row gap-3">
            <input className="form-control" placeholder="Start date" />
            <input className="form-control" placeholder="End date" />
          </div>

          <h4 className="mt-5 mb-3">Event Description</h4>

          <textarea className="form-control mb-3" rows="4" placeholder="Event Image URL (optional)"></textarea>
          <textarea className="form-control mb-4" rows="5" placeholder="Event Description"></textarea>

          <button className="btn btn-purple w-100">Create event</button>
        </form>
      </main>
    </div>
  );
};

export default Page2Create;