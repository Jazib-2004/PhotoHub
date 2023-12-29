import React, {useRef, useEffect} from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png'
import { Button } from 'reactstrap';
const Navbar = ({ username, handleLogout }) => {
  const headerRef = useRef(null);
  const stickyHeaderHandle = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderHandle();
    return window.removeEventListener("scroll", stickyHeaderHandle);
  });   
  return (
    <nav className="navbar" ref={headerRef}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="user-info">
        <span>Welcome, {username}</span>
        <Button className='btn primary__btn' onClick={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;
