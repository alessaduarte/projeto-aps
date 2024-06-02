// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app'; // Ajuste do caminho de importação do componente App
import "./scss/volt.scss";
import "react-datetime/css/react-datetime.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <HashRouter>
//     <ScrollToTop />
//     <HomePage />
//   </HashRouter>,
//   document.getElementById("root")
// );
