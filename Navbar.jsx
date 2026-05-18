import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/dashboard" className="navbar-brand">
          FeedbackHub
        </NavLink>
        <ul className="navbar-nav">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/submit"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Submit Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              All Feedback
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
