import { NavLink } from "react-router-dom";
import styles from "./NavbarTab.module.css";

const NavbarTab = ({}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${styles.isActive} ${styles.main}` : styles.main
      }
      onDragStart={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      to={``}
    ></NavLink>
  );
};

export default NavbarTab;
