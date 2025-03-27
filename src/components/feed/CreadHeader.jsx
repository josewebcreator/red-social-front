import React from 'react';
import { FiFolder, FiMic, FiBook, FiBriefcase } from 'react-icons/fi';
import './CreadHeader.css';

const CreadHeader = () => {
  return (
    <div className="cread-header-container">
      <header className="cread-header">
        <div className="header-content">
          {/* Buscador */}
          <div className="search-bar">
            <input type="text" placeholder="Buscar..." className="search-input" />
          </div>

          {/* Íconos de navegación */}
          <nav className="nav-menu">
            <div className="nav-item">
              <FiFolder className="nav-icon" />
              <span>Repositorio</span>
            </div>
            <div className="nav-item">
              <FiMic className="nav-icon" />
              <span>Anuncios</span>
            </div>
            <div className="nav-item">
              <div className="logo-container">
                <span className="logo">C</span>
              </div>
            </div>
            <div className="nav-item">
              <FiBook className="nav-icon" />
              <span>Biblioteca</span>
            </div>
            <div className="nav-item">
              <FiBriefcase className="nav-icon" />
              <span>Negocios</span>
            </div>
          </nav>

          {/* Botón CREAR */}
          <div className="create-button-container">
            <button className="create-button">CREAR</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default CreadHeader;