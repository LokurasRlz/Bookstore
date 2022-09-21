import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavBar = () => (
  <header>
    <nav className="header__nav">
      <div className="navbar">
        <h1 className="logo">Bookstore CMS</h1>
        <ul>
          <li className="navBooks">
            <Link to="/">BOOKS</Link>
          </li>
          <li className="navCat">
            <Link to="categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <div className="user">
        <FaUser />
      </div>
    </nav>
  </header>
);

export default NavBar;
