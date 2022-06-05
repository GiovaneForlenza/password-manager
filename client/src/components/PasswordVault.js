import React, { useContext } from "react";
import ServiceDisplayLine from "./ServiceDisplayLine";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { UserContext } from "../contexts/UserContext";

function PasswordVault({ retrievedServices, setWhatToShow }) {
  const { sortingBy, setSortingBy, sortingAsc, setSortingAsc } =
    useContext(UserContext);

  function handleServiceNameClick() {
    setSortingAsc(!sortingAsc);
    setSortingBy("serviceName");
  }

  function handleLastUpdatedClick() {
    setSortingAsc(!sortingAsc);
    setSortingBy("lastUpdated");
  }

  return (
    <div className="services-container">
      {retrievedServices.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>
                <div className="clickable" onClick={handleServiceNameClick}>
                  Service name
                  {sortingBy === "serviceName" && (
                    <div className="icon">
                      {sortingAsc ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                  )}
                </div>
              </th>
              <th>Password</th>
              <th>
                <div className="clickable" onClick={handleLastUpdatedClick}>
                  Last updated
                  {sortingBy === "lastUpdated" && (
                    <div className="icon">
                      {sortingAsc ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {retrievedServices.map((service, id) => {
              return (
                <ServiceDisplayLine
                  service={service}
                  id={id}
                  setWhatToShow={setWhatToShow}
                  key={id}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>No stored passwords</h1>
      )}
    </div>
  );
}

export default PasswordVault;
