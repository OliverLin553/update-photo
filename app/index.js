import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/base.css"

import { default as App } from "./components/app";

ReactDOM.render(
  <App />,
  document.getElementById('content')
);