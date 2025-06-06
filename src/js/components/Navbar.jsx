import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Mi Landing</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
          <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
        </ul>
      </div>
    </nav>
  );
}
