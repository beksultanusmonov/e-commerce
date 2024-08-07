import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <>
    <header>
        <div className="container">
            <div className="logo">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2023/06/27/sultan-logo-with-simple-line-graphic-Graphics-73115906-2-580x387.png" alt="" />
            </div>
            <div className="menu">
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
