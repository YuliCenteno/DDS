import React, { useEffect, useState } from "react";
import Filtro from "./Filtro";
import Tabla from "./Tabla";
import { usuariosServices } from "../services/usuarios.service";

export default function ConsultasUsuarios() {
  const [rows, setRows] = useState([]); // estado en donde voy a almacenar los registros de la API

  // traigo los datos (getAll) y los seteo al estado
  async function fetchData() {
    setRows(await usuariosServices.getAll());
  }

  // este efecto se ejecutara solamente la primer vez que se renderice el componente ConsultasUsuarios
  useEffect(() => {
    fetchData();
  }, []);

  // función para eliminar un usuario
  const handleDeleteUser = async (id) => {
    await usuariosServices.deleteUser(id); // invocar el servicio para eliminar el usuario
    await fetchData(); // Obtener los datos actualizados después de eliminar el usuario
  };

  return (
    <>
      <div className="row">
        <Filtro setRows={setRows} />
      </div>
      <div className="row">
        <Tabla rows={rows} handleDeleteUser={handleDeleteUser} />
      </div>
    </>
  );
}
