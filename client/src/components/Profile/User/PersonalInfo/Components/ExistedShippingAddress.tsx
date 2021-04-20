import React, { useEffect } from "react";
import ShippingAddressesForm from "./Forms/ShippingAddressesForm";

const updateLogo = require("@logos/pencil.svg");
const deleteLogo = require("@logos/delete.svg");

interface Props {
  address: {
    _id?: string;
    name?: string;
    addressType?: string;
    address?: string;
    provincia?: string;
    ciudad?: string;
    codigoPostal?: string;
    pais?: string;
  };
}

const ExistedShippingAddress = ({ address }: Props) => {
  const updateShippingAddress = () => {
    console.log("Hola");
  };

  useEffect(() => {
    console.log(address);
  }, []);

  return (
    <div className="existed-shipping-address">
      <div className="shipping-address-name">{address.name}</div>
      <div className="shipping-address-options">
        <button onClick={updateShippingAddress}>
          <img className="icon" src={updateLogo} alt="" />
        </button>
        <button>
          <img className="icon" src={deleteLogo} alt="" />
        </button>
      </div>
      <ShippingAddressesForm shippingAddressId={address._id} />
    </div>
  );
};

export default ExistedShippingAddress;
