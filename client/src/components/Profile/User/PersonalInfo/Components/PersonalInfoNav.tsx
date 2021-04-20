import React from "react";

const PersonalInfoNav = () => {
  return (
    <div className="personal-info-nav-container">
      <div className="nav">
        <div className="nav-item">
          <div className="nav-text">Datos Personales</div>
          <div className="nav-desc">Detalles sobre tu información personal</div>
        </div>
        <div className="nav-item">
          <div className="nav-text">Direcciones de Envío</div>
          <div className="nav-desc">Detalles sobre tus direcciones de envíos</div>
        </div>
        <div className="nav-item">
          <div className="nav-text">Datos Bancarios</div>
          <div className="nav-desc">Detalles sobre tu información bancaria</div>
        </div>
        <div className="nav-item">
          <div className="nav-text">Contraseña y seguridad</div>
          <div className="nav-desc">Detalles sobre la seguridad de tu cuenta</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoNav;
