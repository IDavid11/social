import React from "react";
import { ILibrary } from "interfaces/ILibrary";
import { webUrls } from "services/webUrls";
import ProfileCard from "./ProfileCard";
import { ILibraryProfile } from "interfaces/IProfile";

//meter aqui as cartas que se despregan no perfil dun usuario
//meter as cartas que se despregan no perfil dunha libreria en LibraryMenu.tsx
//implementar lóxica para amosar as cartas correspondentes dependendod de se eres un usuario ou unha librería

const personalInfo = require("@logos/personal_info.svg");
const stats = require("@logos/stats.svg");
const preferences = require("@logos/preferences.svg");
const packageIcon = require("@logos/package.svg");
const wishList = require("@logos/wish_list.svg");
const exchange = require("@logos/exchange.svg");

interface PropsLibrary {
  libraryProfile: ILibraryProfile;
}

const LibraryMenu = ({ libraryProfile }: PropsLibrary) => {
  return (
    <div className="body-menu">
      <ProfileCard
        userProfile={libraryProfile}
        pathname={webUrls.urlStats}
        img={stats}
        title={"Estadísticas"}
        description={"Actualiza tus metas, estadísticas, libros leídos, etc."}
      />
      <ProfileCard
        userProfile={libraryProfile}
        pathname={webUrls.urlLibraryInfo}
        img={personalInfo}
        title={"Información"}
        description={"Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo"}
      />
      <ProfileCard
        userProfile={libraryProfile}
        pathname={webUrls.urlPreferences}
        img={preferences}
        title={"Configuración"}
        description={"Configura tu idioma, moneda y zona horaria predeterminados"}
      />
      <ProfileCard
        userProfile={libraryProfile}
        pathname={webUrls.urlLibraryOrders}
        img={packageIcon}
        title={"Pedidos"}
        description={"Gestiona tus pedidos. Comprobaciones, devoluciones, etc."}
      />
      <ProfileCard
        userProfile={libraryProfile}
        pathname={webUrls.urlStock}
        img={wishList}
        title={"Stock"}
        description={"Gestiona tu stock. Añade nuevos libros, modifica los disponibles, formatos, etc."}
      />
      <ProfileCard
        userProfile={libraryProfile}
        pathname={webUrls.urlAccounting}
        img={exchange}
        title={"Contabilidad"}
        span={"PRO"}
        description={"Gestiona la contabilidad de la librería con facilidad. Prueba ahora un mes gratis!"}
      />
    </div>
  );
};

export default LibraryMenu;
