import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer } from "./Footer";

import { Home } from "./Home";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
          <Home />
          <Footer/>
          </Route>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
