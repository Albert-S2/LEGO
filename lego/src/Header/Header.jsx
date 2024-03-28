'use client';
import './Header.css'
import React from 'react';
import { useState } from 'react'
import Link  from 'next/link'
 
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const buttonImageSrc = menuOpen ? "./menu-open-button.png" : "./menu-close-button.png";

  return (
    <div className="headerContainer">
      <h6>LEGO 10327</h6>
      <button className="headerButton" onClick={toggleMenu}>
          <img className="headerButtonIcon" src={buttonImageSrc} alt="Menu Icon" />
      </button>
        {menuOpen ? null : ( 
          <div className="menuOpened">
              <ul className="menuList">
              <li className="menuLista"><a href={websites.home}>Home</a></li>
          {websites.subwebsites.map((site, index) => (
            <li className="menuLista" key={index}><a href={site.link}>{site.name}</a></li>
          ))}
                </ul>
          </div>
            

          )
         }
    </div>
  );
}


const websites = {
  home: "./",
  subwebsites: [
    { name: "Subwebsite 1", link: "link1" },
    { name: "Subwebsite 2", link: "link2" },
    { name: "Subwebsite 3", link: "link3" }
  ]
};