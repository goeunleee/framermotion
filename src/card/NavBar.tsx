import * as React from "react";
import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
//import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { BrowserRouter } from "react-router-dom";

export default function NavBar (){
    const [sidebar ,setSidebar]=useState(false);

    const showSidebar = () =>setSidebar(!sidebar);

    return (
        <>
            <BrowserRouter>
          {/* 아이콘 컬러 전체 변경 기능 */}
          <IconContext.Provider value={{ color: '#fff' }}>
            {/* 네비게이션 토글 코드*/}
            <div className="navbar">
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
               
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
          </BrowserRouter>
        </>
      );
}