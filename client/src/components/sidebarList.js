import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const SidebarList = props => {
  console.log(props);

  const { items, icons, title } = props;
  return (
    <ul className="sidebar-list">
      <p className="sidebar-list_title">{title}</p>
      {items.map((item, index) => (
        <li key={item}>
          <NavLink
            exact
            to={
              item === "home" ? "/" : `/${item.replace("_", "").toLowerCase()}`
            }
            className="sidebar-list_item"
            activeClassName="sidebar-list_item--active"
            isActive={(match, location) => {
              if (item === "home" && location.pathname === "/") {
                return true;
              } else if (
                location.pathname.indexOf(
                  `/${item.replace("_", "").toLowerCase()}`
                ) !== -1
              ) {
                return true;
              }
            }}
          >
            {icons[index]}
            <span className="sidebar-list_item--text">
              {item.replace("_", " ")}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(SidebarList);
