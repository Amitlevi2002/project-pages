// components/Page1.jsx
import React, { useState } from 'react';
import './Page1.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const events = [
    {
      title: 'Summer Beach Party',
      location: 'Tel Aviv Beach',
      date: 'July 12, 2025',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    },
    {
      title: 'Live Music Night',
      location: 'Haifa Amphitheater',
      date: 'August 3, 2025',
      image: 'https://images.unsplash.com/photo-1518972559570-1ecb7f9d01f7'
    },
    {
      title: 'Tech Conference 2025',
      location: 'Jerusalem Tech Park',
      date: 'September 18, 2025',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df'
    },
    {
      title: 'Startup Meetup',
      location: 'WeWork Herzliya',
      date: 'October 9, 2025',
      image: 'https://images.unsplash.com/photo-1581091012184-dab9248860cb'
    },
    {
      title: 'Outdoor Movie Night',
      location: 'Ramat Gan Park',
      date: 'June 30, 2025',
      image: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae'
    },
    {
      title: 'Festival of Colors',
      location: 'Ashdod Fairgrounds',
      date: 'March 22, 2025',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac'
    }
  ];

  return (
    <div className="page1-wrapper">
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1040
          }}
        ></div>
      )}

      <div
        className={`sidebar bg-white shadow-sm p-4 position-fixed h-100 top-0 start-0 ${sidebarOpen ? '' : 'd-none'}`}
        style={{ width: '250px', zIndex: 1050 }}
      >
        <h4 className="fw-bold mb-4">Event Hive</h4>
        <button className="btn btn-close mb-4" onClick={() => setSidebarOpen(false)}></button>
        <ul className="nav flex-column gap-3">
          <li><button className="btn btn-link text-start" onClick={() => navigate('/')}>Home</button></li>
          <li><button className="btn btn-link text-start" onClick={() => navigate('/dashboard')}>Dashboard</button></li>
          <li><button className="btn btn-link text-start">Events</button></li>
          <li><button className="btn btn-link text-start">Messages</button></li>
          <li><button className="btn btn-link text-start">Profile</button></li>
        </ul>
      </div>

      {!sidebarOpen && (
        <button
          className="btn btn-outline-primary m-3 position-fixed top-0 start-0"
          style={{ zIndex: 1100 }}
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      )}

      <div className="main-content">
        <section className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
          <h1 className="display-3 fw-bold">MADE FOR THOSE WHO DO</h1>
          <p className="lead mt-3">Discover and manage amazing events around you</p>
          <div className="mt-4">
            <button className="btn btn-light text-dark me-2 px-4">Login</button>
            <button className="btn btn-primary px-4">Signup</button>
          </div>
        </section>

        <div className="container filters-wrapper">
          <div className="bg-white shadow p-4 rounded d-flex flex-column flex-md-row gap-3 justify-content-center">
            <select className="form-select w-100 w-md-50">
              <option>Choose Location</option>
            </select>
            <select className="form-select w-100 w-md-50">
              <option>Select Category</option>
            </select>
          </div>
        </div>

        <div className="container-fluid px-4 my-5">
          <div className="row g-4">
            {events.map((event, index) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow-sm event-card">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text text-muted">{event.location} • {event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mb-5">
          <h3 className="mb-3 fw-semibold">Event Location</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="map-wrapper rounded shadow overflow-hidden" style={{ height: '400px' }}>
                <MapContainer center={[32.0853, 34.7818]} zoom={10} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                  />
                  <Marker position={[32.0853, 34.7818]}>
                    <Popup>Tel Aviv Event</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="bg-white shadow p-4 rounded">
                <h5 className="fw-bold mb-3">Tags</h5>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-light text-dark px-3 py-2">Indonesia event</span>
                  <span className="badge bg-light text-dark px-3 py-2">UI</span>
                  <span className="badge bg-light text-dark px-3 py-2">Seminar</span>
                </div>
                <h5 className="fw-bold mb-3">Share with friends</h5>
                <div className="d-flex gap-3">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="32" />
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="32" />
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="32" />
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="32" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="cta-section text-center py-5 text-white">
          <h2 className="mb-3">Make your own Event</h2>
          <p className="mb-4">Login as admin to create or manage your own events</p>
          <button
            className="btn btn-light text-primary fw-semibold px-4"
            onClick={() => navigate('/create')}
          >
            Create Events
          </button>
        </section>
      </div>
    </div>
  );
};

export default Page1;