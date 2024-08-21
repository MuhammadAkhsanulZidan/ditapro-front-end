import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the unique CSS file

const Sidebar = ({ chosenMenu, logout }) => {
  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="unique-sidebar d-none d-md-flex flex-column vh-100 text-white p-3" style={{ backgroundColor: 'var(--primary-color)' }}>
        <h2 className="mt-2 mb-4 text-center">GEMASH</h2>
        <ul className="nav flex-column">
          <li className={`nav-item mb-2 text-center rounded-3`} style={{ backgroundColor: chosenMenu === 0 ? 'white' : '' }}>
            <Link className="nav-link fw-bold" style={{ color: chosenMenu === 0 ? 'var(--primary-color)' : 'white' }} to="/dashboard">
              <i className="bi bi-house-door me-2"></i>
              Dashboard
            </Link>
          </li>
          <li className={`nav-item mb-2 text-center rounded-3`} style={{ backgroundColor: chosenMenu === 1 ? 'white' : '' }}>
            <Link className="nav-link fw-bold" style={{ color: chosenMenu === 1 ? 'var(--primary-color)' : 'white' }} to="/courses">
              <i className="bi bi-book me-2"></i>
              Course
            </Link>
          </li>
          <li className={`nav-item mb-2 text-center rounded-3`} style={{ backgroundColor: chosenMenu === 2 ? 'white' : '' }}>
            <Link className="nav-link fw-bold" style={{ color: chosenMenu === 2 ? 'var(--primary-color)' : 'white' }} to="/calendar">
              <i className="bi bi-calendar me-2"></i>
              Calendar
            </Link>
          </li>
          <li className={`nav-item mb-2 text-center rounded-3`} style={{ backgroundColor: chosenMenu === 3 ? 'white' : '' }}>
            <Link className="nav-link fw-bold" style={{ color: chosenMenu === 3 ? 'var(--primary-color)' : 'white' }} to="/inbox">
              <i className="bi bi-envelope me-2"></i>
              Inbox
            </Link>
          </li>
          <li className={`nav-item mb-2 text-center rounded-3`} style={{ backgroundColor: chosenMenu === 4 ? 'white' : '' }}>
            <Link className="nav-link fw-bold" style={{ color: chosenMenu === 4 ? 'var(--primary-color)' : 'white' }} to="/account">
              <i className="bi bi-person me-2"></i>
              Account
            </Link>
          </li>
          <li className={`nav-item mb-2 text-center rounded-3`} style={{ backgroundColor: chosenMenu === 5 ? 'white' : '' }}>
            <Link className="nav-link fw-bold" style={{ color: chosenMenu === 5 ? 'var(--primary-color)' : 'white' }} to="/help">
              <i className="bi bi-question-circle me-2"></i>
              Help
            </Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-danger w-100 text-center" onClick={() => {logout(); window.location.reload();}}>
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Top horizontal menu for smaller screens */}
      <div className="unique-top-menu d-md-none text-white p-2 fixed-top">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="ps-3 mb-0">DITAPRO</h2>
          <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#topMenu" aria-controls="topMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list text-white"></i>
          </button>
        </div>
        <div className="collapse" id="topMenu">
          <ul className="nav flex-column mt-2">
            <li className={`nav-item mb-2 rounded-3`} style={{ backgroundColor: chosenMenu === 0 ? 'white' : '' }}>
              <Link className="nav-link fw-bold" style={{ color: chosenMenu === 0 ? 'var(--primary-color)' : 'white' }} to="/dashboard">
                <i className="bi bi-house-door me-2"></i>
                Dashboard
              </Link>
            </li>
            <li className={`nav-item mb-2 rounded-3`} style={{ backgroundColor: chosenMenu === 1 ? 'white' : '' }}>
              <Link className="nav-link fw-bold" style={{ color: chosenMenu === 1 ? 'var(--primary-color)' : 'white' }} to="/courses">
                <i className="bi bi-book me-2"></i>
                Course
              </Link>
            </li>
            <li className={`nav-item mb-2 rounded-3`} style={{ backgroundColor: chosenMenu === 2 ? 'white' : '' }}>
              <Link className="nav-link fw-bold" style={{ color: chosenMenu === 2 ? 'var(--primary-color)' : 'white' }} to="/calendar">
                <i className="bi bi-calendar me-2"></i>
                Calendar
              </Link>
            </li>
            <li className={`nav-item mb-2 rounded-3`} style={{ backgroundColor: chosenMenu === 3 ? 'white' : '' }}>
              <Link className="nav-link fw-bold" style={{ color: chosenMenu === 3 ? 'var(--primary-color)' : 'white' }} to="/inbox">
                <i className="bi bi-envelope me-2"></i>
                Inbox
              </Link>
            </li>
            <li className={`nav-item mb-2 rounded-3`} style={{ backgroundColor: chosenMenu === 4 ? 'white' : '' }}>
              <Link className="nav-link fw-bold" style={{ color: chosenMenu === 4 ? 'var(--primary-color)' : 'white' }} to="/account">
                <i className="bi bi-person me-2"></i>
                Account
              </Link>
            </li>
            <li className={`nav-item mb-2 rounded-3`} style={{ backgroundColor: chosenMenu === 5 ? 'white' : '' }}>
              <Link className="nav-link fw-bold" style={{ color: chosenMenu === 5 ? 'var(--primary-color)' : 'white' }} to="/help">
                <i className="bi bi-question-circle me-2"></i>
                Help
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger w-100 text-center" onClick={() => logout}>
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
