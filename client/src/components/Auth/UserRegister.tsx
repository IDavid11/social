import React, { useState, useEffect, ChangeEvent } from "react";
import API from "services/api";
import FloatContainer from "./Components/FloatContainer";

const authImage = require("@images/libreria4.jpg");
const emailLogo = require("@logos/email.svg");
const googleLogo = require("@logos/google.svg");
const facebookLogo = require("@logos/facebook.svg");

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const UserRegister = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastName: "",
  });

  const [focus, setFocus] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleInputChange = (e: InputChange) => {
    if (e.target.value !== "") {
      setFocus({ ...focus, [e.target.name]: true });
      setUserData({ ...userData, [e.target.name]: e.target.value });
    } else {
      setUserData({ ...userData, [e.target.name]: "" });
      setFocus({ ...focus, [e.target.name]: false });
    }
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) window.location.href = "/";
  }, [token]);

  const registerClicked = async () => {
    const { name, lastName, email, password } = userData;
    await API.registerUser({ name, lastName, email, password });
    window.location.href = "/";
  };

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
                  label={"Nombre"}
                  inputType={"text"}
                  inputName={"name"}
                  value={userData.name}
                  focusValue={focus.name}
                  handleInputChange={handleInputChange}
                />
                <FloatContainer
                  label={"Apellido"}
                  inputType={"text"}
                  inputName={"lastName"}
                  value={userData.lastName}
                  focusValue={focus.lastName}
                  handleInputChange={handleInputChange}
                />
              </div>
              <FloatContainer
                label={"Email"}
                inputType={"text"}
                inputName={"email"}
                value={userData.email}
                focusValue={focus.email}
                handleInputChange={handleInputChange}
              />
              <FloatContainer
                label={"Contraseña"}
                inputType={"password"}
                inputName={"password"}
                value={userData.password}
                focusValue={focus.password}
                handleInputChange={handleInputChange}
              />
              <FloatContainer
                label={"Confirmar contraseña"}
                inputType={"password"}
                inputName={"confirmPassword"}
                value={userData.confirmPassword}
                focusValue={focus.confirmPassword}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="auth-buttons">
              <button onClick={registerClicked}>
                <div className="button-container">
                  <div className="button-img">
                    <img src={emailLogo} alt="" />
                  </div>
                  <div className="button-text">Registrarse</div>
                </div>
              </button>
              <button>
                <div className="button-container">
                  <div className="button-img">
                    <img src={googleLogo} alt="" />
                  </div>
                  <div className="button-text">Registrarse con Google</div>
                </div>
              </button>
              <button>
                <div className="button-container">
                  <div className="button-img">
                    <img src={facebookLogo} alt="" />
                  </div>
                  <div className="button-text">Registrarse con Facebook</div>
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

export default UserRegister;
