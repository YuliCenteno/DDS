import React from "react";
import { useNavigate } from "react-router-dom";

export default function Tabla({ rows, handleDeleteUser }) {
  const navigate = useNavigate();

  return (
    <>
      {!rows.error ? (
        <div className="container table-responsive" style={{ marginTop: 80 }}>
          <table className="table table-bordered border-black border-opacity-50 table-striped table-hover">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  Nombre
                </th>
                <th scope="col" className="text-center">
                  Apellido
                </th>
                <th scope="col" className="text-center">
                  Usuario
                </th>
                <th scope="col" className="text-center">
                  Email
                </th>
                <th scope="col" className="text-center">
                  Fecha alta
                </th>
                <th scope="col" className="text-center">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody id="lista-carnets">
              {rows &&
                rows.map((user, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{user.nombre}</td>
                      <td>{user.apellido}</td>
                      <td>{user.usuario}</td>
                      <td>{user.email}</td>
                      <td>{user.fecha_alta}</td>
                      <td>
                        <button
                          onClick={() => navigate(`/actualizar/${user.id}`)}
                          className="btn btn-success"
                          style={{
                            backgroundColor: "#006400",
                            border: "none",
                            margin: "4px",
                          }}
                        >
                          <i
                            className="bi bi-pencil-fill"
                            style={{ fontSize: "16px", color: "white" }}
                          ></i>
                        </button>
                        <button
                          onClick={async () => await handleDeleteUser(user.id)}
                          className="btn btn-danger"
                          style={{
                            backgroundColor: "#8B0000",
                            border: "none",
                            margin: "4px",
                          }}
                        >
                          <i
                            className="bi bi-trash-fill"
                            style={{ fontSize: "16px", color: "white" }}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="container" style={{ marginTop: 80 }}>
          <h1 className="text-center">{rows.error}</h1>
          {/* <div className="text-center">
            <button
              onClick={async () => await resetFilters()}
              className="btn btn-primary"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              REINTENTAR SIN FILTROS
            </button>
          </div> */}
        </div>
      )}
    </>
  );
}
