import React, { useState, useEffect, ChangeEvent } from "react";
import { IUserProfile } from "interfaces/IProfile";
import { IBaseUser } from "interfaces/IBaseUser";
import { IUser } from "interfaces/IUser";
import API from "services/api";

interface Props {
  userProfile: IUserProfile;
}

const PersonalInfoForm = ({ userProfile }: Props) => {
  const [baseUser, setBaseUser] = useState<IBaseUser>({ email: "" });
  const [user, setUser] = useState<IUser>({
    name: "",
    lastName: "",
    address: {
      provincia: "",
      ciudad: "",
      codigoPostal: "",
      pais: "",
    },
  });

  const handleSubmit = () => {
    API.updateUser({
      email: baseUser.email,
      name: user.name,
      lastName: user.lastName,
      address: {
        provincia: user.address.provincia,
        ciudad: user.address.ciudad,
        codigoPostal: user.address.codigoPostal,
        pais: user.address.pais,
      },
    });
  };

  useEffect(() => {
    setBaseUser({ email: userProfile.baseUser.email });
    setUser({
      name: userProfile.user.name,
      lastName: userProfile.user.lastName,
      address: {
        provincia: userProfile.user.address.provincia,
        ciudad: userProfile.user.address.ciudad,
        codigoPostal: userProfile.user.address.codigoPostal,
        pais: userProfile.user.address.pais,
      },
    });
  }, [userProfile]);

  return (
    <div className="form">
      <div className="form-title">Modificar datos personales</div>
      <div className="form-name">
        <div className="container-input">
          <label htmlFor="name">Nombre</label>
          <input type="text" onChange={(e) => setUser({ ...user, name: e.target.value })} value={user.name} />
        </div>
        <div className="container-input">
          <label htmlFor="last-name">Apellido</label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            value={user.lastName}
          />
        </div>
      </div>
      <div className="container-input">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          onChange={(e) => setBaseUser({ ...baseUser, email: e.target.value })}
          value={baseUser.email}
        />
      </div>
      <div className="form-address">
        <div className="container-input">
          <label htmlFor="name">Provincia</label>
          <input
            type="text"
            onChange={(e) =>
              setUser({
                ...user,
                address: {
                  provincia: e.target.value,
                  ciudad: user.address.ciudad,
                  codigoPostal: user.address.codigoPostal,
                  pais: user.address.pais,
                },
              })
            }
            value={user.address.provincia}
          />
        </div>
        <div className="container-input">
          <label htmlFor="last-name">Ciudad</label>
          <input
            type="text"
            onChange={(e) =>
              setUser({
                ...user,
                address: {
                  provincia: user.address.provincia,
                  ciudad: e.target.value,
                  codigoPostal: user.address.codigoPostal,
                  pais: user.address.pais,
                },
              })
            }
            value={user.address.ciudad}
          />
        </div>
      </div>
      <div className="form-address">
        <div className="container-input">
          <label htmlFor="name">Código Postal</label>
          <input
            type="text"
            onChange={(e) =>
              setUser({
                ...user,
                address: {
                  provincia: user.address.provincia,
                  ciudad: user.address.ciudad,
                  codigoPostal: e.target.value,
                  pais: user.address.pais,
                },
              })
            }
            value={user.address.codigoPostal}
          />
        </div>
        <div className="container-input">
          <label htmlFor="last-name">País</label>
          <input
            type="text"
            onChange={(e) =>
              setUser({
                ...user,
                address: {
                  provincia: user.address.provincia,
                  ciudad: user.address.ciudad,
                  codigoPostal: user.address.codigoPostal,
                  pais: e.target.value,
                },
              })
            }
            value={user.address.pais}
          />
        </div>
      </div>
      <button className="save-button" onClick={handleSubmit}>
        Actualizar información
      </button>
      <small>
        Quieres darte de baja? <a href="">Hazlo ahora mismo!</a>
      </small>
    </div>
  );
};

export default PersonalInfoForm;
