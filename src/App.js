import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/search">
              <SearchResult />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
