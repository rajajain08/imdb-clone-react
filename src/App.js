import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SearchResult from "./components/SearchResult/SearchResult";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <ProtectedRoute path="/search">
              <SearchResult />
            </ProtectedRoute>
            <ProtectedRoute path="/movieDetails">
              <MovieDetails />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
