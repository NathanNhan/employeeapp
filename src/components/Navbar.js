import React from 'react'
import {  Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    {/* Brand and toggle get grouped for better mobile display */}
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
        aria-expanded="false"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a className="navbar-brand" href="#">
        Brand
      </a>
    </div>
    {/* Collect the nav links, forms, and other content for toggling */}
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active">
          <Link to="/">
            Home <span className="sr-only"></span>
          </Link>
        </li>
        <li>
          <Link to='users/add'>Add User</Link>
        </li>
      </ul>
    </div>
    {/* /.navbar-collapse */}
  </div>
  {/* /.container-fluid */}
</nav>
    )
}

export default Navbar

