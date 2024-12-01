import React from 'react';

const RegisterPage = () => {
  return (
    <div>
      <h2>Registrarse</h2>
      <form>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
};

export default RegisterPage;
