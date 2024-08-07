import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleHamburgerClick = () => {
      setShowMenu(!showMenu);
    };

    const [showPagesDropdown, setShowPagesDropdown] = useState(false);

    const handlePagesClick = () => {
      setShowPagesDropdown(!showPagesDropdown);
    };


  return (
    <>
      
 
      {showMenu && (<div class="humberger__menu__overlay active" onClick={() => setShowMenu(false)}></div>)}
      
        
        {showMenu && (
        <div className="humberger__menu__wrapper show__humberger__menu__wrapper">
          <div class="humberger__menu__logo">
            <a href="#"><img src="img/logo.png" alt=""/></a>
        </div>
        <div class="humberger__menu__cart">
            <ul>
                <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
            <div class="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div class="humberger__menu__widget">
            <div class="header__top__right__language">
                <img src="img/language.png" alt=""/>
                <div>English</div>
                <span class="arrow_carrot-down"></span>
                <ul>
                    <li><a href="#">Spanis</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
            <div class="header__top__right__auth">
                <a href="#"><i class="fa fa-user"></i> Login</a>
            </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
  <ul>
    <li className="active">
      <Link to={'/'}>Home</Link>
    </li>
    <li>
      <Link to={'/shop'}>Shop</Link>
    </li>
    <li>
        <a href="#" onClick={handlePagesClick}>
          Pages <i class="fa-solid fa-angle-right"></i>
        </a>
        {showPagesDropdown && (
          <ul className="header__menu__dropdown">
            <li>
              <Link to={'/shop-details'}>Shop Details</Link>
            </li>
            <li>
              <Link to={'/cart'}>Shoping Cart</Link>
            </li>
            <li>
              <Link to={'/check-out'}>Check Out</Link>
            </li>
            <li>
              <Link to={'/blog-details'}>Blog Details</Link>
            </li>
          </ul>
        )}
      </li>
    <li>
      <Link to={'/blog'}>Blog</Link>
    </li>
    <li>
      <Link to={'/contact'}>Contact</Link>
    </li>
  </ul>
</nav>
          <div id="mobile-menu-wrap"></div>
        <div class="header__top__right__social">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-pinterest-p"></i></a>
        </div>
        <div class="humberger__menu__contact">
            <ul>
                <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                <li>Free Shipping for all Order of $99</li>
            </ul>
        </div>
        </div>
      )}
        
    
   

   
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__left">
                            <ul>
                                <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__right">
                            <div class="header__top__right__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                            <div class="header__top__right__language">
                                <img src="img/language.png" alt=""/>
                                <div>English</div>
                                <span class="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div class="header__top__right__auth">
                                <a href="#"><i class="fa fa-user"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="header__menu">
                        <ul>
                            <li class="active"><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/shop'}>Shop</Link></li>
                            <li><a href="#">Pages</a>
                                <ul class="header__menu__dropdown">
                                    <li><Link to={'/shop-details'}>Shop Details</Link></li>
                                    <li><Link to={'/cart'}>Shoping Cart</Link></li>
                                    <li><Link to={'/check-out'}>Check Out</Link></li>
                                    <li><Link to={'/blog-details'}>Blog Details</Link></li>
                                </ul>
                            </li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div class="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div class="humberger__open" onClick={handleHamburgerClick}>
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
    
    </>
  )
}

export default Header
