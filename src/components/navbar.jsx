import { NavLink } from 'react-router-dom'
import range from '../util/range';

const Navbar = () => (
  <nav className="navbar">
    {
      ['Michaelmas', 'Hilary', 'Trinity'].map(termName => (
        <NavLink
          key={termName}
          className="navbar-item"
          activeClassName="active"
          to={`/${termName.toLowerCase()}`}
        >
          {termName}
        </NavLink>
      ))
    }
    <div class="navbar-separator" />
    <a href="https://github.com/jmarucha/mmathphys-lectures" className="navbar-item">
      Github
    </a>
  </nav>
);
export default Navbar;
