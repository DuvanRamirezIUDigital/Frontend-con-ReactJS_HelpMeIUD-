import React, { useState } from 'react';
import CaseList from '../components/CaseList'; // Importamos el componente CaseList

const AdminPage = () => {
  // Estados para manejar el formulario
  const [delito, setDelito] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [cases, setCases] = useState([]); // Estado para almacenar los casos

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo caso
    const newCase = {
      delito,
      fecha,
      hora,
      ubicacion,
      latitud,
      longitud,
      id: Date.now(),
    };

    // Añadir el nuevo caso al estado
    setCases([...cases, newCase]);

    // Limpiar el formulario
    setDelito('');
    setFecha('');
    setHora('');
    setUbicacion('');
    setLatitud('');
    setLongitud('');
  };

  return (
    <div className="admin-page">
      <h2>Administración</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="delito">Delito</label>
        <input
          type="text"
          id="delito"
          value={delito}
          onChange={(e) => setDelito(e.target.value)}
          required
        />

        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />

        <label htmlFor="hora">Hora</label>
        <input
          type="time"
          id="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />

        <label htmlFor="ubicacion">Ubicación</label>
        <input
          type="text"
          id="ubicacion"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          required
        />

        <label htmlFor="latitud">Latitud</label>
        <input
          type="number"
          id="latitud"
          value={latitud}
          onChange={(e) => setLatitud(e.target.value)}
          required
        />

        <label htmlFor="longitud">Longitud</label>
        <input
          type="number"
          id="longitud"
          value={longitud}
          onChange={(e) => setLongitud(e.target.value)}
          required
        />

        <button type="submit">Registrar Caso</button>
      </form>

      {/* Mostrar la lista de casos registrados */}
      <CaseList cases={cases} />
    </div>
  );
};

export default AdminPage;
