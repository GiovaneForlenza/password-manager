import React, { useContext } from "react";
import "../../style/components/service-password-details.scss";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { decrypt } from "../../handlers/EncryptionHandler";

function FormLine({
  isPassword,
  selectedService,
  setSelectedService,
  lineTitle,
  whatToEdit,
  showPassword,
  setShowPassword,
}) {
  return (
    <div className="line">
      {isPassword ? (
        <>
          <label htmlFor="">{lineTitle}</label>
          <div className="password">
            {showPassword ? (
              <input
                type="text"
                value={decrypt({
                  password: selectedService[whatToEdit],
                  iv: selectedService.passwordIv,
                })}
                name={whatToEdit}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setSelectedService((prevState) => ({
                    ...prevState,
                    [name]: value,
                  }));
                }}
                id="password"
              />
            ) : (
              <div className="password-hidden">
                <span>*****************</span>
              </div>
            )}
            <div
              className="show-hide-password-container"
              onClick={(e) => {
                e.stopPropagation();
                setShowPassword(() => !showPassword);
              }}
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </div>
          </div>
        </>
      ) : (
        <>
          <label htmlFor="">{lineTitle}</label>
          <input
            type="text"
            value={selectedService[whatToEdit]}
            name={whatToEdit}
            onChange={(e) => {
              const { name, value } = e.target;
              setSelectedService((prevState) => ({
                ...prevState,
                [name]: value,
              }));
            }}
          />
        </>
      )}
    </div>
  );
}

export default FormLine;
