import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div className="p-3">
      <h1>Instructors</h1>
      <div className="d-flex flex-column">
        {/* //? Absolute path (tam adres vermek) */}
        {/* <Link to="/instructors/1">Instructor-1</Link> */}
        {/* //! Relative path (goreceli adres vermek) */}
        <Link to="1" state={{ name: "felix" }}>
          Instructor-1
        </Link>
        <Link to="2" state={{ name: "noah" }}>
          Instructor-2
        </Link>
        <Link to="3" state={{ name: "anthony" }}>
          Instructor-3
        </Link>
      </div>
    </div>
  );
};

export default Instructors;
