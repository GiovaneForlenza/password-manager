import React from "react";

import "../style/components/modal-buttons.scss";

function PrimarySecondaryButton({ text, onClick, btnClass }) {
  return (
    <div
      className={`buttonContainer ${
        btnClass === "primary"
          ? "primary"
          : btnClass === "secondary"
          ? "seconday"
          : btnClass === "alert"
          ? "alert"
          : ""
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default PrimarySecondaryButton;
