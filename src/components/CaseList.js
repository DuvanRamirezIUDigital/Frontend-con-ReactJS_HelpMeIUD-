import React from 'react';

const CaseList = ({ cases }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Delito</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Ubicación</th>
        </tr>
      </thead>
      <tbody>
        {cases.map((caseItem, index) => (
          <tr key={index}>
            <td>{caseItem.delito}</td>
            <td>{caseItem.fecha}</td>
            <td>{caseItem.hora}</td>
            <td>
              <a
                href={`https://www.openstreetmap.org/?mlat=${caseItem.latitud}&mlon=${caseItem.longitud}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en el mapa
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CaseList;
