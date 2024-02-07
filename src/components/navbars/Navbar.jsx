import React from "react";
import "./Navbar.css";
import ListItem from "./ListItem";
const NAV_ITEMS = [
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "#",
    value: "Home",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "#",
    value: "About",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "#",
    value: "Portfolio",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "#",
    value: "Contact",
  },
];

function Navbar() {
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>Profile</a>
      </h1>
      <ul className='main-nav'>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.id} navlink={item.link} navitem={item.value} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
