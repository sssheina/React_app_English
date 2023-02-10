import './header.css';

import logo from '../images/logo_1.png'


function Header() {
    return (
    <div className="header">
    <div class="logoBlock"><img class="logo" src={logo} alt="logo" />ENGLISH CARDS</div>
    <nav className="menu">
        <ul className="menuList">
            <li className="menuItem">WORDS</li>
            <li className="menuItem">GAME</li>
        </ul>
    </nav>
    
    </div>
    
    );
}

export default Header;