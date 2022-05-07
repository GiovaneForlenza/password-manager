import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ErrorHandlingContextProvider } from "./contexts/ErrorHandlingContext";
import { GlobalFunctionsContextProvider } from "./contexts/GlobalFunctionsContext";
import { UserContextProvider } from "./contexts/UserContext";
import { PasswordContextProvider } from "./contexts/PasswordContext";
import { SelectedServiceContextProvider } from "./contexts/SelectedServiceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalFunctionsContextProvider>
      <ErrorHandlingContextProvider>
        <UserContextProvider>
          <PasswordContextProvider>
            <SelectedServiceContextProvider>
              <App />
            </SelectedServiceContextProvider>
          </PasswordContextProvider>
        </UserContextProvider>
      </ErrorHandlingContextProvider>
    </GlobalFunctionsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
