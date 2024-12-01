import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
};

export default LoginPage;
