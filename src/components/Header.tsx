import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/home">
        <h1>JEM Movies</h1>
      </Link>
      <Link to="/watchlist">Watchlist</Link>

      <Link to="/toprated">Top Rated</Link>
    </div>
  );
};

export default Header;
