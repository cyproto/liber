import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <a className="nav-item" href="#">
        Category
      </a>

      <a className="nav-item" href="#">
        Filter
      </a>

      <a className="nav-item" href="#">
        Support
      </a>

      <a className="nav-item" href="#">
        Contact
      </a>

      <a className="nav-item" href="#">
        About
      </a>

      <a className="nav-item" href="#">
        Help
      </a>
    </Menu>
  );
};