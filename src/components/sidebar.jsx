import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">MemoryOS</h2>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/inbox">Inbox</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
}

export default Sidebar;