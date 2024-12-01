import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 style={{ color: 'white' }}>HelpMeIUD</h1>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li><Link to="/" className="navbar-link">Inicio</Link></li>
          <li><Link to="/admin" className="navbar-link">Administración</Link></li>
          <li><Link to="/login" className="navbar-link">Iniciar sesión</Link></li>
          <li><Link to="/register" className="navbar-link">Registrarse</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
