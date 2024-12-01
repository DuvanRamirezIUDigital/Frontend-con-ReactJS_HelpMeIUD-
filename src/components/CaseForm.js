import React, { useState } from 'react';

const CaseForm = () => {
  const [caseData, setCaseData] = useState({
    delito: '',
    fecha: '',
    hora: '',
    latitud: '',
    longitud: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseData({
      ...caseData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(caseData); // Aquí se enviaría a la API
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="delito"
        value={caseData.delito}
        placeholder="Delito"
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fecha"
        value={caseData.fecha}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="hora"
        value={caseData.hora}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="latitud"
        value={caseData.latitud}
        placeholder="Latitud"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="longitud"
        value={caseData.longitud}
        placeholder="Longitud"
        onChange={handleChange}
        required
      />
      <input type="submit" value="Registrar Caso" />
    </form>
  );
};

export default CaseForm;
