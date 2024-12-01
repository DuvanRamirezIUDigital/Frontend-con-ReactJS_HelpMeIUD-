import React, { useState, useEffect } from 'react';
import CaseList from '../components/CaseList';
import CaseForm from '../components/CaseForm';
import { fetchCases, createCase } from '../services/apiService';

const DashboardPage = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const loadCases = async () => {
      const data = await fetchCases();
      setCases(data.slice(0, 10)); // Simula 10 registros.
    };
    loadCases();
  }, []);

  const handleCreateCase = async (newCase) => {
    const result = await createCase(newCase);
    if (result.success) setCases([...cases, result.data]);
  };

  return (
    <main>
      <h2>Dashboard</h2>
      <CaseForm onSubmit={handleCreateCase} />
      <CaseList cases={cases} />
    </main>
  );
};

export default DashboardPage;
