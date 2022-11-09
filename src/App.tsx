import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Header from "./components/Header";
import Main from "./components/Main";
import TopRatedList from "./components/TopRatedList";

import WatchList from "./components/WatchList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/toprated" element={<TopRatedList />} />
          <Route path="/watchlist" element={<WatchList />} />
          {/* wildcard: */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
