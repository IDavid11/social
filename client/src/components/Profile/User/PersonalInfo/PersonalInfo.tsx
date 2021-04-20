import React, { useState, useEffect } from "react";
import FormHeader from "./Components/Forms/FormHeader";
import PersonalInfoForm from "./Components/Forms/PersonalInfoForm";
import PersonalInfoNav from "./Components/PersonalInfoNav";
import ShippingAddressesWrapper from "./Components/ShippingAddressesWrapper";

const PersonalInfo = (props) => {
  const userProfile = props.location.state.user;

  const [visibleForm, setVisibleForm] = useState({
    personalInfo: false,
    shippingAddresses: true,
    bankData: false,
    passwordAndSecurity: false,
  });

  // Facer aqui useEffect e useState e pasar os datos aos forms

  return (
    <div className="container-fw">
      <div className="container container-mt100">
        <div className="personal-info-container">
          <div className="personal-info-wrap">
            <PersonalInfoNav />
            <div className="form-container">
              <FormHeader userProfile={userProfile} />
              {visibleForm.personalInfo ? <PersonalInfoForm userProfile={userProfile} /> : <></>}
              {visibleForm.shippingAddresses ? <ShippingAddressesWrapper userProfile={userProfile} /> : <></>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
