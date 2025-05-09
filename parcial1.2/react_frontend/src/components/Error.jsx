import React from "react";
import { Link } from "react-router-dom";
import RobotSad from "../images/images.png";

export default function Error() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">ERROR: 404 NOT FOUND</h1>
      <h2 className="text-center"> No existe esta página 😢</h2>
      <img
        src={RobotSad}
        alt="Robot triste"
        className="img-fluid my-4"
        style={{ maxWidth: "300px" }}
      />
      <Link to="/" className="btn btn-secondary">
        Volver a la página principal
      </Link>
    </div>
  );
}
