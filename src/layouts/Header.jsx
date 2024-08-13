import { NavLink } from 'react-router-dom';
import './Header.scss';
import { useState } from 'react';

function Header() {

  const [nav, setNav] = useState('no');

  const changeNav = () => {
    nav == 'no' ? setNav('active') : setNav('no');
  }

  return (
    <>
    <header>
        <div className="container">
            <div className="logo">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2023/06/27/sultan-logo-with-simple-line-graphic-Graphics-73115906-2-580x387.png" alt="" />
            </div>
            <div className="hamburger" onClick={changeNav}>
              <i class="fa-solid fa-bars"></i>
            </div>
            <div className={nav == 'active' ? "menu active" : "menu"}>
                <i class="fa-solid fa-xmark" onClick={changeNav}></i>
                <NavLink to='/'><span>Kiyimlar</span></NavLink>
                <NavLink to='/predmed'><span>Buyumlar</span></NavLink>
                <NavLink to='/acsesuar'><span>Akssesuarlar</span></NavLink>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
