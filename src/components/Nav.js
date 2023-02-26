import { NavLink } from "react-router-dom";

const styleObject = {
  color: "red",
  borderBottom: "solid 2px red",
};

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/"} style={({ isActive }) => (isActive ? styleObject : null)}>
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink to={"/course"} className={({ isActive }) => (isActive ? "NavLink" : null)}>
            CoursePage
          </NavLink>
        </li>
        <li>
          <NavLink to={"/create-course"} className={({ isActive }) => (isActive ? "NavLink" : null)}>
            CreateCoursePage
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={({ isActive }) => (isActive ? "NavLink" : null)}>
            AboutPage
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
