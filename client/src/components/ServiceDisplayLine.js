import React, { useContext, useState } from "react";

import "../style/components/service-container-table.scss";

import { SelectedServiceContext } from "../contexts/SelectedServiceContext";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function ServiceDisplayLine({ service, id, setWhatToShow }) {
  const [showPassword, setShowPassword] = useState(false);

  const { setService } = useContext(SelectedServiceContext);

  const colorSelection = [
    "#2E5661",
    "#005DA2",
    "#393483",
    "#038AF1",
    "#80AFBB",
    "#514BC1",
    "#8D8ECA",
  ];

  function getServiceFirstLetter(service) {
    return service.substring(0, 1).toUpperCase();
  }

  function getServiceLetterColor() {
    return colorSelection[Math.floor(Math.random() * colorSelection.length)];
  }

  function trimSecondsFromTime(dateTime) {
    return dateTime.substring(0, dateTime.indexOf(":") + 3);
  }

  return (
    <tr
      className="service-container"
      key={id}
      onClick={() => {
        setWhatToShow("details");
        setService(service);
      }}
    >
      <td className="column name">
        <div className="flex">
          <div
            className="left"
            style={{ backgroundColor: getServiceLetterColor() }}
          >
            <span>{getServiceFirstLetter(service.serviceName)}</span>
          </div>
          <div className="right">
            <div className="name-container">{service.serviceName}</div>
            <div className="username-container">{service.username}</div>
          </div>
        </div>
      </td>
      <td className="column password">
        <div className="password-container">
          {showPassword ? (
            <div className="password">{service.password}</div>
          ) : (
            <div className="password-hidden">
              <span>*****************</span>
            </div>
          )}
        </div>
        <div
          className="show-hide-password-container"
          onClick={() => setShowPassword(() => !showPassword)}
        >
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </div>
      </td>
      <td className="column date-time">
        <div>
          <div className="date-time-creates">
            {trimSecondsFromTime(service.dateTimeCreated)}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ServiceDisplayLine;
