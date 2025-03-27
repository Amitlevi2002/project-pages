// components/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper d-flex">
      {/* Sidebar */}
      <aside className="sidebar bg-white p-4 shadow-sm">
        <h4 className="fw-bold mb-4">Event Hive</h4>
        <ul className="nav flex-column gap-3">
          <li><button className="btn btn-sidebar active">Dashboard</button></li>
          <li><button className="btn btn-sidebar">Events</button></li>
          <li><button className="btn btn-sidebar">Messages</button></li>
          <li><button className="btn btn-sidebar">Profile</button></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main p-4">
        <section className="banner p-4 rounded mb-5 text-white">
          <h2 className="fw-bold mb-2">Discover and experience extraordinary Events</h2>
          <p>Enter in the world of events. Discover now the latest Events or start creating your own!</p>
          <div className="mt-3">
            <button className="btn btn-light me-2">Discover now</button>
            <button className="btn btn-outline-light">Watch video</button>
          </div>
        </section>

        <section className="mb-5">
          <h4 className="fw-bold mb-4">Events Participated</h4>
          <div className="row g-4">
            {[1, 2, 3, 4].map((event) => (
              <div className="col-6 col-md-3" key={event}>
                <div className="card text-center shadow-sm h-100">
                  <div className="card-img-top bg-gradient" style={{ height: '120px' }}></div>
                  <div className="card-body">
                    <h6 className="fw-bold">Abstract Colors</h6>
                    <p className="small text-muted mb-2">By Esthera Jackson</p>
                    <p className="small text-muted">Current Data</p>
                    <button className="btn btn-sm btn-outline-primary">Register</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="fw-bold mb-4">Trending Events</h4>
          <div className="row g-4">
            {[1, 2, 3, 4].map((event) => (
              <div className="col-6 col-md-3" key={event}>
                <div className="card text-center shadow-sm h-100">
                  <div className="card-img-top bg-gradient" style={{ height: '120px' }}></div>
                  <div className="card-body">
                    <h6 className="fw-bold">Abstract Colors</h6>
                    <p className="small text-muted mb-2">By Esthera Jackson</p>
                    <p className="small text-muted">Current Data</p>
                    <button className="btn btn-sm btn-outline-primary">Register</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;