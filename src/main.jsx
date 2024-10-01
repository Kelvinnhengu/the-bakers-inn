import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './assets/fonts/font.scss'
import './styles/index.scss'
import "./styles/Navbar.scss";
import './styles/footer.scss';

import './styles/recipes.scss'
import './styles/contact.scss'
import  './styles/AboutPage/aboutpage.scss'
import './styles/Kids Corner/Games.scss'
import'./styles/homepage.scss'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




