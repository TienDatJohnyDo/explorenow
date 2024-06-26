import React from 'react';
import './styles/post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importing Routes and Route instead of BrowserRouter as Router
import PleaseImage from './images/Please_login.png'


function GuestPost() {
  return (
    
    <div className="discover-container">
        <h1 className="discover-label">Post </h1>
      <div className="image-container" style={{ textAlign: 'center' }}> {/* Apply text-align: center */}
        <img src={PleaseImage} alt="Please Login" className="image" style={{ width: '300px', height: '200px' }} />
      </div>

      <div className="button-container">
        <Link to="/login"> {/* Use "to" prop to specify the path */}
          <button className="login-button-guest">Login</button>
        </Link>
      </div>
      
    </div>
  );
}

export default GuestPost;