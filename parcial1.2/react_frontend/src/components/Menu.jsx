import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        marginBottom: "20px",
        backgroundColor: "#272727",
        boxShadow: "0 16px 8px -8px rgba(0, 0, 255, 0.2)",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontSize: "1.5rem", color: "white" }}
        >
          Gestor de Usuarios
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ background: "white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{ fontSize: "1.15rem", color: "white" }}
              >
                Consultar
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/crear"
                style={{ fontSize: "1.15rem", color: "white" }}
              >
                Crear
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
