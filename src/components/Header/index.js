import React from 'react';
import {
  Link
} from "react-router-dom";

import "./styles.css";

const Header = () => (
  <header id="main-header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/#">
        <img src={"../../logo-nexti-fone.png"} width="180" height="50" alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center mx-auto" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cliente">Cliente</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/produto">Produto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pedido">Pedido</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;