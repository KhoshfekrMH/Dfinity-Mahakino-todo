import { dfinityMahakinoTodo_backend } from '../../declarations/dfinityMahakinoTodo_backend';
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./components/App";

const init = async () => {
  const root = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
  root.render (
      <StrictMode>
        <App />
      </StrictMode>
  );
};

init();