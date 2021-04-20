import React, { useState } from "react";
import { IUserProfile } from "interfaces/IProfile";
import API from "services/api";

interface Props {
  userProfile: IUserProfile;
}

const FormHeader = ({ userProfile }: Props) => {
  const [image, setImage] = useState();

  const onChange = (e) => {
    setImage(e.target.files[0]);
  };

  const updateImage = async () => {
    const formData = new FormData();
    formData.append("image", image);
    await API.updateUserImage(formData);
  };

  return (
    <div className="form-header">
      <div className="form-header-left">
        <div className="form-img">
          <img src={userProfile.user.image} alt="" />
        </div>
        <div className="form-name">
          <div className="name">{`${userProfile.user.name} ${userProfile.user.lastName}`}</div>
          <div className="rol">Lector</div>
        </div>
      </div>
      <div className="form-header-right">
        <button>
          <div>Modificar</div>
          <input type="file" onChange={onChange} />
        </button>
        <button onClick={updateImage}>Enviar</button>
      </div>
    </div>
  );
};

export default FormHeader;
