import React, { useState } from "react";

export default function InstagramCard() {
  const [siguiendo, setSiguiendo] = useState(false);

  const toggleSeguir = () => {
    setSiguiendo(!siguiendo);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body d-flex align-items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPUJIXEC0bGuIePlPJDOuy2Kg16f97hgs1g&s"
          alt="Perfil"
          className="rounded-circle mr-3"
          style={{ width: "50px", height: "50px" }}
        />
        <div className="user-info">
          <h5 className="card-title mb-1">Boca</h5>
          <p className="card-text text-muted mb-2">El mas grande</p>
        </div>
      </div>
      <button
        className={`btn btn-block ${
          siguiendo ? "btn-secondary" : "btn-primary"
        }`}
        onClick={toggleSeguir}
      >
        {siguiendo ? "Siguiendo" : "Seguir"}
      </button>
    </div>
  );
}
