import { NavLink } from 'react-router-dom';
import '../common/Header.css';

export const Header = () => {
  return (
    <header>
      <nav className="navbar ">
        <div className="container">
          <ul className="list-group">
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
