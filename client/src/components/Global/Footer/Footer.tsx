import React, { useState } from "react";
import Item from "./Components/Item";

const Footer = () => {
  return (
    <div className="container-fw footer">
      <div className="container container-mt">
        <div className="footer-container">
          <div className="footer-items-container">
            <Item title={"Local Library"} data={["Quienes somos", "Librerías", "Trabaja con nosotros"]} />
            <Item
              title={"Ayuda"}
              data={["Devoluciones", "Pedidos", "Envíos", "Preguntas frecuentes", "Contacta con nosotros"]}
            />
            <Item
              title={"Servicios"}
              data={[
                "Intercambio de libros",
                "Vende con nosotros",
                "Gestión de librerías",
                "Programa afiliados",
              ]}
            />
            <Item
              title={"Información legal"}
              data={[
                "Condiciones de uso",
                "Condiciones de contratación",
                "Política de cookies",
                "Política de protección de datos",
                "Política de devoluciones",
              ]}
            />
          </div>
          <div className="local-copyright">
            <small>Copyright &copy; 2021 Local Library. Todos los derechos reservados.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
