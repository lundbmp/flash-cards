import '../../index.css';
import {ReactComponent as DownIcon} from './icons/down.svg';
import {ReactComponent as PointIcon} from './icons/point.svg';
import {ReactComponent as BackIcon} from './icons/back.svg';



import React, {useState,useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';

function Nav() {
  return (
    <Navbar>
      {/* <NavItem icon ={< />} */}
     

      <NavItem icon={<DownIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <button className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </button>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function DropdownItem(props) {
    return (
      <button href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </button>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Dashboard</DropdownItem>
          <DropdownItem
            rightIcon={<PointIcon />}
            goToMenu="subjects">
            Subjects
          </DropdownItem>
          <DropdownItem
            leftIcon=""
            rightIcon={<PointIcon />}
            goToMenu="cards">
            Create Cards
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'subjects'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BackIcon />}>
            <h3>Go back</h3>
          </DropdownItem>
          <DropdownItem leftIcon="🧮">Math</DropdownItem>
          <DropdownItem leftIcon="💾">Computer Science</DropdownItem>
          <DropdownItem leftIcon="🏰">History</DropdownItem>
          <DropdownItem leftIcon='📖'>Literature</DropdownItem>
          <DropdownItem leftIcon="🧬">Science</DropdownItem>
          <DropdownItem leftIcon="🏃">Gym</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'cards'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BackIcon />}>
            <h3>Go back </h3>
          </DropdownItem>
          <DropdownItem leftIcon="🧮">Math</DropdownItem>
          <DropdownItem leftIcon="💾">Computer Science</DropdownItem>
          <DropdownItem leftIcon="🏰">History</DropdownItem>
          <DropdownItem leftIcon="📖">Literature</DropdownItem>
          <DropdownItem leftIcon="🧬">Science</DropdownItem>
          
        </div>
      </CSSTransition>
    </div>
  );
}

export default Nav;