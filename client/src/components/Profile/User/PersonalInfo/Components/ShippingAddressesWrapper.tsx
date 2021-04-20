import React, { useState, useEffect } from "react";
import { IUserProfile } from "interfaces/IProfile";
import ShippingAddressesForm from "./Forms/ShippingAddressesForm";
import ExistedShippingAddress from "./ExistedShippingAddress";

interface Props {
  userProfile: IUserProfile;
}

const ShippingAddressesWrapper = ({ userProfile }: Props) => {
  useEffect(() => {
    console.log(userProfile.user);
  }, []);

  return (
    <div className="form-wrapper">
      <div className="form-title">Modifica tus direcciones de envío</div>
      {userProfile.user.shippingAddresses ? (
        userProfile.user.shippingAddresses.map((address) => {
          return <ExistedShippingAddress address={address} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShippingAddressesWrapper;
