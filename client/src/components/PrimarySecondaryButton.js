import React from "react";

import "../style/components/modal-buttons.scss";

function PrimarySecondaryButton({ text, onClick, btnClass }) {
  return (
    <div
      className={`buttonContainer ${
        btnClass === "primary" ? "primary" : "seconday"
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default PrimarySecondaryButton;
