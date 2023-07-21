import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  //? Link, NavLink ve Navigate componentleri declarative routing
  //? gerceklestirmek icin kullanilir.
  //? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
  //? bir etkilesim icerisinde bulunarak yonledirme yapilan bir
  //? componentlerdir. (Nav v.b)
  return (
    <ul className="bg-warning">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        {/* <NavLink
          style={({ isActive }) => ({ color: isActive && "red" })}
          to="/instructors"
        >
          Instructors
        </NavLink> */}
        {/* //? Navlink kullanıldığında aktif olan link elementine otomatik active class'ı eklenir, bu class stillendirme için kullanılabilir */}
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
