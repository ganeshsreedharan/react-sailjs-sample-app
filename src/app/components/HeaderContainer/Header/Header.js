import React from 'react';
import avatar from '../../../images/face1.jpg'
import Search from '../SearchBox/Search'
import './Header.css'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container">
    <ul className="nav nav-tabs hide-small">
      <li className="nav-item"> <a className="nav-link active" href="#"><i className="zmdi zmdi-email-open"></i> Messages</a> </li>
      <li className="nav-item"> <a className="nav-link" href="#"><i className="zmdi zmdi-notifications-none"></i> Notifications</a> </li>
    </ul>
    <a className="navbar-brand ml-auto" href="#"><i className="zmdi zmdi-twitter text-primary  align-middle"></i> </a>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Search></Search>
      </li>
      <li className="nav-item dropdown  d-xl-inline-block mt-1"> <a className="nav-link dropdown-toggle pt-0" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false"> 
      <img className="img-xs rounded-circle" src={avatar} alt="Profile image"/> </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown"> <a className="dropdown-item"><i className="zmdi zmdi-sign-in pr-2"></i> Sign Out </a> </div>
      </li>
      <li className="nav-item"> <a href="#" className="btn btn-raised btn-primary radius-20 mt-2">Tweet</a> </li>
    </ul>
  </div>
</nav>
  );
};

export default Header;
