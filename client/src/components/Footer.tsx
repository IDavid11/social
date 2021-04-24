import CurrencyLogo from "icons/EuroCurrencyLogo";
import LanguageLogo from "icons/LanguageLogo";
import React from "react";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="footer-items-container">
          <FooterItem title={"Local Library"} data={["Quienes somos", "Librerías", "Trabaja con nosotros"]} />
          <FooterItem
            title={"Ayuda"}
            data={["Devoluciones", "Pedidos", "Envíos", "Preguntas frecuentes", "Contacta con nosotros"]}
          />
          <FooterItem
            title={"Servicios"}
            data={[
              "Intercambio de libros",
              "Vende con nosotros",
              "Gestión de librerías",
              "Programa afiliados",
            ]}
          />
          <FooterItem
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
        <div className="local-preferences">
          <div className="language-container">
            <a className="language">
              <span className="language-img">
                <LanguageLogo height={12} />
              </span>
              <span className="language-text">Español (ES)</span>
            </a>
          </div>
          <div className="currency-container">
            <a className="currency">
              <span className="currency-img">
                <CurrencyLogo height={12} />
              </span>
              <span className="currency-text">EUR</span>
            </a>
          </div>
        </div>
        <div className="local-copyright">
          <small>Copyright &copy; 2021 Local Library. Todos los derechos reservados.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
