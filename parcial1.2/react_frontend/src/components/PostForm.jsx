import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usuariosServices } from "../services/usuarios.service";
import { useNavigate } from "react-router-dom";

export default function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const [postError, setPostError] = useState(""); // va a ser true si la API me dio error

  // es la que llama al servicio
  const onSubmit = async (data) => {
    console.log(data);
    const response = await usuariosServices.create(data);
    console.log("respuesta en post: ", response);
    if (response.error) {
      setPostError(response.error); // "no se puedo crear el usuario"
      return;
    }
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h1 className="card-title">Creacion de Usuario</h1>
              </div>
              <div className="card-body">
                <form id="postForm" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre:
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("nombre", {
                        required: {
                          value: true,
                          message: "El nombre es requerido",
                        },
                        maxLength: {
                          value: 30,
                          message:
                            "El nombre no puede tener más de 30 caracteres",
                        },
                      })}
                      className="form-control"
                    />
                    {errors.nombre && (
                      <p className="text-danger">{errors.nombre.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">
                      Apellido:
                    </label>
                    <input
                      id="apellido"
                      type="text"
                      {...register("apellido", {
                        required: {
                          value: true,
                          message: "El apellido es requerido",
                        },
                        maxLength: {
                          value: 30,
                          message:
                            "El apellido no puede tener más de 30 caracteres",
                        },
                      })}
                      className="form-control"
                    />
                    {errors.apellido && (
                      <p className="text-danger">{errors.apellido.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">
                      Usuario:
                    </label>
                    <input
                      id="usuario"
                      type="text"
                      {...register("usuario", {
                        required: {
                          value: true,
                          message: "El usuario es requerido",
                        },
                        maxLength: {
                          value: 30,
                          message:
                            "El usuario no puede tener más de 30 caracteres",
                        },
                      })}
                      className="form-control"
                    />
                    {errors.usuario && (
                      <p className="text-danger">{errors.usuario.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      id="password"
                      type="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "El password es requerido",
                        },
                        maxLength: {
                          value: 30,
                          message:
                            "El password no puede tener más de 30 caracteres",
                        },
                      })}
                      className="form-control"
                    />
                    {errors.password && (
                      <p className="text-danger">{errors.password.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email:
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "El email es requerido",
                        },
                        pattern: {
                          value:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                          message: "Dirección de correo electrónico no válida",
                        },
                      })}
                      className="form-control"
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </div>
                  {postError && <p>{postError}</p>}
                  <button type="submit" className="btn btn-primary">
                    Crear
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-end mt-3 mb-3">
          <div className="col-auto">
            <button
              style={{ borderRadius: "50&" }}
              className="btn btn-primary"
              //   onClick={() => navigate("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-table"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
