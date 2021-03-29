import './Header.css';
import LoginButton from './LoginButton';

function Header() {
    return (
      <div className="Header">
        <h1 class="title-wrapper">
          <div class="title">
          Logo
          </div>
          <LoginButton />
        </h1>
      </div>
    );
  }

export default Header;