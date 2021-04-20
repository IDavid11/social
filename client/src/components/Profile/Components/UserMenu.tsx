import React from "react";
import { webUrls } from "services/webUrls";
import ProfileCard from "./ProfileCard";
import { IUserProfile } from "interfaces/IProfile";

//meter aqui as cartas que se despregan no perfil dun usuario
//meter as cartas que se despregan no perfil dunha libreria en LibraryMenu.tsx
//implementar lóxica para amosar as cartas correspondentes dependendod de se eres un usuario ou unha librería

const personalInfo = require("@logos/personal_info.svg");
const stats = require("@logos/stats.svg");
const preferences = require("@logos/preferences.svg");
const packageIcon = require("@logos/package.svg");
const wishList = require("@logos/wish_list.svg");
const exchange = require("@logos/exchange.svg");

interface Props {
  userProfile: IUserProfile;
}

const UserMenu = ({ userProfile }: Props) => {
  return (
    <div className="body-menu">
      <ProfileCard
        userProfile={userProfile}
        pathname={webUrls.urlProfile}
        img={stats}
        title={"Estadísticas"}
        description={"Actualiza tus metas, estadísticas, libros leídos, etc."}
      />
      <ProfileCard
        userProfile={userProfile}
        pathname={webUrls.urlPersonalInfo}
        img={personalInfo}
        title={"Información personal"}
        description={"Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo"}
      />
      <ProfileCard
        userProfile={userProfile}
        pathname={webUrls.urlPreferences}
        img={preferences}
        title={"Configuración"}
        description={"Configura tu idioma, moneda y zona horaria predeterminados"}
      />
      <ProfileCard
        userProfile={userProfile}
        pathname={webUrls.urlOrders}
        img={packageIcon}
        title={"Pedidos"}
        description={"Gestiona tus pedidos. Comprobaciones, devoluciones, etc."}
      />
      <ProfileCard
        userProfile={userProfile}
        pathname={webUrls.urlWishList}
        img={wishList}
        title={"Guardados"}
        description={"Gestiona tu lista de deseos. Compra, añade, elimina, etc."}
      />
      <ProfileCard
        userProfile={userProfile}
        pathname={webUrls.urlExchange}
        img={exchange}
        title={"Intercambios"}
        description={"Gestiona tus libros de intercambio o dona libros que no uses."}
      />
    </div>
  );
};

export default UserMenu;
