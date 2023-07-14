import logo from "../../helpers/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="horoscope" />
      </div>
      <div className="links">
        <a href="#horoscope">Horoscope </a>
        <a href="#daily">Daily </a>
        <a href="#tarot">Tarot </a>
        <a href="#article">Article </a>
        <a href="#contact">Contact </a>
      </div>
    </div>
  );
};
export default Navbar;
