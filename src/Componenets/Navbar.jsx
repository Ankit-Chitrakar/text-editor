import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
            <a className="navbar-brand"  style={{fontWeight: 'bolder', letterSpacing:'4px', fontSize:'20px'}} href="#" >{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
                </li>
            </ul>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="switch"/>
                <label className={`form-check-label ${props.mode === 'light'?'text-dark':'text-light'}`} style={{letterSpacing:'2px', fontWeight:'600'}} htmlFor="flexSwitchCheckDefault">{props.btntitle}</label>
            </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    btntitle: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
};
  
Navbar.defaultProps = {
    title: "Set Title Here",
    home: "About Us",
    btntitle: 'Set Button Title',
    mode: 'light'
};
  