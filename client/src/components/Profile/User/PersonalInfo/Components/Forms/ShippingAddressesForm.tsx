import React, { useState, useEffect } from "react";
import { IUserProfile } from "interfaces/IProfile";
import API from "services/api";

interface Props {
  address?: ShippingAddress;
  shippingAddressId?: string;
}

type ShippingAddress = {
  name?: string;
  addressType?: string;
  address?: string;
  provincia?: string;
  ciudad?: string;
  codigoPostal?: string;
  pais?: string;
};

const ShippingAddressesForm = ({ shippingAddressId }: Props) => {
  const InitialShippingAddress = {
    name: "",
    addressType: "",
    address: "",
    provincia: "",
    ciudad: "",
    codigoPostal: "",
    pais: "",
  };

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>(InitialShippingAddress);

  const getShippingAddress = async (id: string) => {
    const res = await API.getUserShippingAddress(id);
    setShippingAddress(res.data);
  };

  const addUserShippingAddress = () => {
    API.addUserShippingAddress({
      name: shippingAddress.name,
      addressType: shippingAddress.addressType,
      address: shippingAddress.address,
      provincia: shippingAddress.provincia,
      ciudad: shippingAddress.ciudad,
      codigoPostal: shippingAddress.codigoPostal,
      pais: shippingAddress.pais,
    });
  };

  const updateUserShippingAddress = () => {
    API.addUserShippingAddress({
      name: shippingAddress.name,
      addressType: shippingAddress.addressType,
      address: shippingAddress.address,
      provincia: shippingAddress.provincia,
      ciudad: shippingAddress.ciudad,
      codigoPostal: shippingAddress.codigoPostal,
      pais: shippingAddress.pais,
    });
  };

  useEffect(() => {
    if (shippingAddressId) getShippingAddress(shippingAddressId);
  }, []);

  return (
    <div className="form">
      <div className="container-input">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
          value={shippingAddress.name}
        />
      </div>
      <div className="form-address">
        <div className="container-input">
          <label htmlFor="addressType">Tipo</label>
          <input
            type="text"
            onChange={(e) => setShippingAddress({ ...shippingAddress, addressType: e.target.value })}
            value={shippingAddress.addressType}
          />
        </div>
        <div className="container-input">
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
            value={shippingAddress.address}
          />
        </div>
      </div>
      <div className="form-address">
        <div className="container-input">
          <label htmlFor="provincia">Provincia</label>
          <input
            type="text"
            onChange={(e) => setShippingAddress({ ...shippingAddress, provincia: e.target.value })}
            value={shippingAddress.provincia}
          />
        </div>
        <div className="container-input">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            onChange={(e) => setShippingAddress({ ...shippingAddress, ciudad: e.target.value })}
            value={shippingAddress.ciudad}
          />
        </div>
      </div>
      <div className="form-address">
        <div className="container-input">
          <label htmlFor="codigoPostal">Código Postal</label>
          <input
            type="text"
            onChange={(e) => setShippingAddress({ ...shippingAddress, codigoPostal: e.target.value })}
            value={shippingAddress.codigoPostal}
          />
        </div>
        <div className="container-input">
          <label htmlFor="pais">País</label>
          <input
            type="text"
            onChange={(e) => setShippingAddress({ ...shippingAddress, pais: e.target.value })}
            value={shippingAddress.pais}
          />
        </div>
      </div>
      <button className="save-button" onClick={addUserShippingAddress}>
        Actualizar información
      </button>
    </div>
  );
};

export default ShippingAddressesForm;
