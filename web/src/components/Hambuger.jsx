import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOverlayClick = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          
          <div className="humberger__open" onClick={handleHamburgerClick}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
        {showMenu && (
          <div className="humberger__menu__wrapper show__humberger__menu__wrapper">
            
          </div>
        )}
        {showMenu && (
          <div className="humberger__menu__overlay active" onClick={handleOverlayClick} />
        )}
      </div>
    </>
  );
};

export default Navbar;