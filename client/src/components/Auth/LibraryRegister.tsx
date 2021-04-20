import React, { useState, useEffect, ChangeEvent } from "react";
import { ILibrary } from "interfaces/ILibrary";
import API from "services/api";
import FloatContainer from "./Components/FloatContainer";

const authImage = require("@images/libreria4.jpg");
const emailLogo = require("@logos/email.svg");

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const LibraryRegister = () => {
  const initialState = {
    libraryName: "",
    cif: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: {
      provincia: "",
      ciudad: "",
      calle: "",
      codigoPostal: "",
    },
  };

  const [library, setLibrary] = useState<ILibrary>(initialState);
  const [image, setImage] = useState();

  const [address, setAddress] = useState({
    provincia: "",
    ciudad: "",
    calle: "",
    codigoPostal: "",
  });

  const token = localStorage.getItem("token");

  const onChange = (e) => {
    setImage(e.target.files[0]);
    //setFilename(e.target.files[0].name);
  };

  const [focus, setFocus] = useState({
    libraryName: false,
    cif: false,
    email: false,
    password: false,
    confirmPassword: false,
    provincia: false,
    ciudad: false,
    calle: false,
    codigo_postal: false,
  });

  const handleInputChange = (e: InputChange) => {
    if (e.target.value !== "") {
      setFocus({ ...focus, [e.target.name]: true });
      setLibrary({ ...library, [e.target.name]: e.target.value });
      setAddress({ ...address, [e.target.name]: e.target.value });
    } else {
      setLibrary({ ...library, [e.target.name]: "" });
      setAddress({ ...address, [e.target.name]: "" });
      setFocus({ ...focus, [e.target.name]: false });
    }
  };

  const registerLibrary = async () => {
    const formData = new FormData();
    formData.append("libraryName", library.libraryName);
    formData.append("email", library.email);
    formData.append("password", library.password);
    formData.append("cif", library.cif);
    formData.append("provincia", address.provincia);
    formData.append("ciudad", address.ciudad);
    formData.append("calle", address.calle);
    formData.append("codigoPostal", address.codigoPostal);
    //formData.append("checks", library.checks);
    formData.append("image", image);
    await API.registerLibrary(formData);
    window.location.href = "/";
  };

  useEffect(() => {
    if (token) window.location.href = "/";
  }, [token]);

  return (
    <div className="container">
      <div className="auth-container">
        <div className="auth-img-container">
          <img className="auth-img" src={authImage} alt="" />
        </div>
        <div className="auth-form">
          <div className="main-auth-form">
            <p className="auth-form-header">Regístrate</p>
            <div className="field-wrap">
              <div className="field field-wrap-flex">
                <FloatContainer
                  label={"Nombre de la librería"}
                  inputType={"text"}
                  inputName={"libraryName"}
                  value={library.libraryName}
                  focusValue={focus.libraryName}
                  handleInputChange={handleInputChange}
                />
                <FloatContainer
                  label={"CIF"}
                  inputType={"text"}
                  inputName={"cif"}
                  value={library.cif}
                  focusValue={focus.cif}
                  handleInputChange={handleInputChange}
                />
              </div>
              <div className="field field-wrap-flex">
                <FloatContainer
                  label={"Provincia"}
                  inputType={"text"}
                  inputName={"provincia"}
                  value={address.provincia}
                  focusValue={focus.provincia}
                  handleInputChange={handleInputChange}
                />
                <FloatContainer
                  label={"Ciudad"}
                  inputType={"text"}
                  inputName={"ciudad"}
                  value={address.ciudad}
                  focusValue={focus.ciudad}
                  handleInputChange={handleInputChange}
                />
                <FloatContainer
                  label={"CP"}
                  inputType={"number"}
                  inputName={"codigo_postal"}
                  value={address.codigoPostal}
                  focusValue={focus.codigo_postal}
                  handleInputChange={handleInputChange}
                />
              </div>
              <FloatContainer
                label={"Email"}
                inputType={"text"}
                inputName={"email"}
                value={library.email}
                focusValue={focus.email}
                handleInputChange={handleInputChange}
              />
              <FloatContainer
                label={"Contraseña"}
                inputType={"password"}
                inputName={"password"}
                value={library.password}
                focusValue={focus.password}
                handleInputChange={handleInputChange}
              />
              <FloatContainer
                label={"Confirmar contraseña"}
                inputType={"password"}
                inputName={"confirmPassword"}
                value={library.confirmPassword}
                focusValue={focus.confirmPassword}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="auth-buttons">
              <button onClick={registerLibrary}>
                <div className="button-container">
                  <div className="button-img">
                    <img src={emailLogo} alt="" />
                  </div>
                  <div className="button-text">Registrarse</div>
                </div>
              </button>
            </div>
          </div>
          <div className="auth-texts">
            <div className="text">
              <p>You already have an account?</p>
              <a className="text-bold" href="/auth/login">
                Login here!
              </a>
            </div>
            <div className="text">
              <span></span>
              <p>¿Eres una librería?</p>
              <a className="text-bold" href="register/library">
                Únete a Local Library
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryRegister;
