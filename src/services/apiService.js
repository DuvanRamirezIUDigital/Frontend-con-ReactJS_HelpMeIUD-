const apiUrl = 'https://api.3000.com';

export const fetchCases = async () => {
  try {
    const response = await fetch(`${apiUrl}/cases`);
    return await response.json();
  } catch (error) {
    console.error('Error al obtener los casos:', error);
  }
};

export const createCase = async (caseData) => {
  try {
    const response = await fetch(`${apiUrl}/cases`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(caseData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error al registrar el caso:', error);
  }
};
