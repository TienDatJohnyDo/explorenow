import React from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from 'react-router-dom';
import Discover from "./Discover"; // Import the Search component
import Post from './Post';
import Profile from './Profile';

function SearchPage() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">Where to? </h1>
      
      <div className="text-input-container">
        <input 
          type="text"
          placeholder="Places, hotels, restaurants..."
          className="text-input"
        />
        <FontAwesomeIcon icon={faSearch} color="grey" size="lg" style={{ marginLeft: '-30px', zIndex: '1' }} />
      </div>
      
      <div className="navigation-bar">
        <Link to ="/discover" className="nav-button">
          <FontAwesomeIcon icon={faHome} color="white" size="lg" />
        </Link>
        <button className="nav-button">
          <FontAwesomeIcon icon={faSearch} color="#6DDDE4" size="lg" style={{ fontWeight: 'bold' }} />
        </button>
        <Link to="/post" className="nav-button">
          <FontAwesomeIcon icon={faPlus} color="white" size="lg" style={{ fontWeight: 'bold' }} />
        </Link>
        <Link to="/profile" className="nav-button">
          <FontAwesomeIcon icon={faUser} color="white" size="lg" />
        </Link>
      </div>

      {/* Routes */}
      <Routes>

        <Route path = "/discover" element = {<Discover />} />
        <Route path="/post" element={<Post />} />
        <Route path = "/profile" element ={<Profile />} />
      </Routes>
    </div>
  );
}

export default SearchPage;