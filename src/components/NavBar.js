import { Link } from 'react-router-dom';


const NavBar = () => (
  <header>
    <h1 className="logo">Bookstore CMS</h1>
    <nav className="header__nav">
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;