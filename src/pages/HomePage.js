import React from 'react';
import Map from '../components/Map';
import CaseList from '../components/CaseList';

const HomePage = () => {
  const cases = [
    { delito: 'Acoso Sexual', fecha: '2024-11-29', hora: '14:00', latitud: 4.60971, longitud: -74.08175 },
    { delito: 'Robo', fecha: '2024-11-29', hora: '15:00', latitud: 4.61585, longitud: -74.07258 },
  ];

  return (
    <div>
      <h2>Bienvenido a HelpMeIUD</h2>
      <p>Consulta casos de inseguridad registrados en tu área.</p>
      <Map cases={cases} />
      <h3>Casos Registrados</h3>
      <CaseList cases={cases} />
    </div>
  );
};

export default HomePage;
