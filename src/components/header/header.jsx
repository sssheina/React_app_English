import './Header.css';

import logo from '../images/logo_1.png'


function Header() {
    return (
    <div className="header">
    <div class="logoBlock"><img class="logo" src={logo} alt="logo" />ENGLISH CARDS</div>
    <nav className="menu">
        <ul className="menuList">
            <li className="menuItem"><a href="/">WORDS</a></li>
            <li className="menuItem"><a href="/">GAME</a></li>
        </ul>
    </nav>
    
    </div>
    
    );
}

export default Header;