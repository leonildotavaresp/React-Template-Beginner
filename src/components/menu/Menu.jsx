import "./Menu.css";
import Logo from "./Logo";
import Pesquisar from "./Pesquisar";

export default (props) => (
  <div className="menu">
    <Logo />
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>
    {/* <Pesquisar /> */}
  </div>
);
