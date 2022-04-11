import React from 'react';
import ReactDOM from "react-dom/client";
import ReactRouterApp from './react-router/App';
import ReduxApp from './redux/App';
import { BrowserRouter } from 'react-router-dom';

const AppForReactRouter = () => <BrowserRouter> <ReactRouterApp /> </BrowserRouter>


ReactDOM.createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <ReduxApp/>
    </React.StrictMode>
  );

