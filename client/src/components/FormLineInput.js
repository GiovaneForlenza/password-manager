import React from "react";

function FormLineInput({
  inputType,
  inputId,
  spanText,
  errorId,
  errorText,
  buttonText,
  onClick,
  required,
  buttonDelete,
}) {
  return (
    <>
      {inputType === "submit" ? (
        <div className="">
          <div
            className={`button-container ${buttonDelete && "button-delete"}`}
            onClick={onClick}
          >
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
            <div className="span-container">
              <span htmlFor="">{spanText}</span>
              {required && <span className="field-required">*</span>}
            </div>
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
