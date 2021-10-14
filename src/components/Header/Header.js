import React from 'react';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link px-3 text-white btn-outline-secondary rounded" aria-current="page" href="/Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 text-white btn-outline-secondary rounded" href="/links">Links</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 text-white btn-outline-secondary rounded" href="/links">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 text-white btn-outline-secondary rounded" href="/aboutus">About us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;