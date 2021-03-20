import React from "react";
import avatar from "../img/avatar.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav className=" nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Yo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/abilities" exact activeClassName="active">
              Habilidades
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contacto
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" exact activeClassName="active">
              Proyectos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/courses" exact activeClassName="active">
              Cursos
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 Aponce Nicolas</p>
        </footer>
      </nav>
    </div>
  );
};

export default NavBar;
