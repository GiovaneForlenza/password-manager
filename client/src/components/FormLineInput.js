import React from "react";

function FormLineInput({
  inputType,
  inputId,
  spanText,
  errorId,
  errorText,
  buttonText,
  onClick,
}) {
  return (
    <>
      {inputType === "submit" ? (
        <div className="line">
          <div className="button-container" onClick={onClick}>
            {buttonText}
          </div>
        </div>
      ) : (
        <div className="line">
          <div className="input-container">
            <input
              type={inputType}
              placeholder=" "
              id={inputId}
              autoComplete="off"
            />
            <span htmlFor="">{spanText}</span>
          </div>
          <div className="error username hidden" id={errorId}>
            {errorText}
          </div>
        </div>
      )}
    </>
  );
}

export default FormLineInput;
