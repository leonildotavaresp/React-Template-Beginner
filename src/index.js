import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Menu from "./components/menu/Menu";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Menu />
    <Section description="React Framework  of Moment 😍" />
    <Footer description="Leonildo 🥰" />
  </StrictMode>,
  rootElement
);
