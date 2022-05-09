import React from "react";
import ServiceDisplayLine from "./ServiceDisplayLine";

function PasswordVault({ retrievedServices, setWhatToShow }) {
  return (
    <div className="services-container">
      {retrievedServices.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Service</th>
              {/* <th></th> */}
              <th>Password</th>
              <th>Last Updated</th>
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
