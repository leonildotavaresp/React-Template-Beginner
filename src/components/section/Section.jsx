import "./Section.css";
import logo from "./logo.svg";
import "./AnimationSection.css";

export default (props) => (
  <section className="princ">
    <div className="image">
      <img src={logo} alt="imagem" className="App-logo" />
    </div>
    <div className="dec">
      <h1>{props.description}</h1>
    </div>
  </section>
);
