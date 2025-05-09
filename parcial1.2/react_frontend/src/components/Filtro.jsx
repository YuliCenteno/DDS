import React from "react";
import { useForm } from "react-hook-form";
import { usuariosServices } from "../services/usuarios.service";

const Filtro = ({ setRows }) => {
  // traigo las funciones relevantes de useForm, que es nuestro hook de formularios proveniente de la libreria
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  // funcion que va a enviar los datos del formulario
  const onSubmit = async (data) => {
    console.log(data);
    setRows(await usuariosServices.getByFilters(data)); // invocar el servicio para filtrar los usuarios, una vez
    // traidos los datos filtrados, los seteo al estado
  };

  // ignorar esto por ahora, no hace nada
  // const setFields = () => {
  //   reset();
  // };

  return (
    <div>
      {/* ese onSubmit={handleSubmit(onSubmit)}, significa que cuando se envien los datos del formulario, 
      es decir, cuando el tipo pulse ENVIAR, se ejecuta la funcion handleSubmit de la libreria, que llama a la funcion
      onSubmit que declaramos mas arriba  */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border p-4 rounded shadow-sm"
        style={{ width: "90%", margin: "auto" }}
      >
        <h1 className="text-center">Filtrar Usuarios</h1>
        <div className="mx-4">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          {/* el register es una funcion que recibe 2 parametros: 
          1. nombre del campo a registrar
          2. reglas de validacion personalizadas: cada regla esta compuesta por un valor y un mensaje personalizado */}
          <input
            id="name"
            type="text"
            {...register("nombre", {
              required: {
                value: false,
              },
              maxLength: {
                value: 7,
                message: "El nombre no puede tener mÃ¡s de 7 caracteres",
              },
            })}
            className="form-control"
          />
          {/* si el campo nombre tiene un error, se muestra un mensaje de error, ese error se da cuando el usuario
          no cumple alguna validacion al enviar el formulario */}
          {errors.nombre && (
            <p className="text-danger">{errors.nombre.message}</p>
          )}
        </div>
        <br />
        <div className="mx-4">
          <label htmlFor="apellido" className="form-label">
            Apellido:
          </label>
          <input
            id="apellido"
            type="text"
            {...register("apellido", {
              required: false,
              minLength: {
                value: 2,
                message: "El apellido debe tener al menos 2 caracteres",
              },
            })}
            className="form-control"
          />
          {errors.apellido && (
            <p className="text-danger">{errors.apellido.message}</p>
          )}
        </div>

        {/* <select
          {...register("gender", {
            required: {
              value: true,
              message: "este campo es rrqeuriso",
            },
          })}
        >
          <option value="">Select...</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>

        {errors.gender && (
          <p className="text-danger">{errors.gender.message}</p>
        )} */}

        <br />
        <button className="btn btn-primary mx-4" type="submit">
          Enviar
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-4"
          // onClick={setFields}
        >
          Resetear
        </button>
      </form>
    </div>
  );
};

export default Filtro;
