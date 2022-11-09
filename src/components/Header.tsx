import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/home">
        <h1>JEM Movies</h1>
      </Link>
      <div className="header-nav">
        <Link to="/watchlist" className="watchlist">
          Watchlist
        </Link>
        <Link to="/toprated" className="top-rated">
          Top Rated
        </Link>
      </div>
    </div>
  );
};

export default Header;
