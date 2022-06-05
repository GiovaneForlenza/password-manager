import React from "react";

function FormLine({ service, selectedService, title, info }) {
  return (
    <div className="field">
      <div className="title">{title}</div>
      {/* <div className="line">
        <div className="title">Original:</div>
        <div className="info  ">{service[info]}</div>
      </div> */}
      <div className="line">
        {/* <div className="title">Changed:</div> */}
        <div className="info">{selectedService[info]}</div>
      </div>
    </div>
  );
}

export default FormLine;
