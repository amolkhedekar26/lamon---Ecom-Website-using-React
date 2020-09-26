import React, { Component } from "react";
import { menuItems } from "./MenuItems";
import Logo from "../../static/images/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  menuClickHandler = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <nav className="header">
        <img
          className="header__logo"
          src={Logo}
          width="50"
          height="50"
          alt="Logo"
        />
        <div className="header__menuIcon" onClick={this.menuClickHandler}>
          <i
            className={
              this.state.clicked ? "fa fa-times fa-2x" : "fa fa-bars fa-2x"
            }
          ></i>
        </div>
        <ul
          className={
            this.state.clicked ? "header__menu active" : "header__menu"
          }
        >
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.class} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <li>
            <a className="header__link" href="#">
              <i className="fa fa-shopping-cart header__cartIcon"></i>
              <span className="header__cartCount">0</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
