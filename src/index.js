import React from 'react';
import ReactDOM from "react-dom/client";

// import App from './01_unitTesting/event | async';
// import App from './01_unitTesting/mock';
import App from './02_integrationTesting/react-router';
// import App from './02_integrationTesting/redux-toolkit';


ReactDOM.createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

