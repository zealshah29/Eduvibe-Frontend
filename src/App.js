import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Organise } from "./Organise";
import { Footer } from "./Footer";
import Focus from "./Focus";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import Plan from "./Plan";
function App() {
  return (
    <div>
      <Router>
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/focus">
           <Navbar/>
            <Focus/>
          </Route>
          <Route exact path="/organise">
           <Navbar/>
            <Organise/>
          </Route>
          <Route exact path="/plan">
           <Navbar/>
            <Plan/>
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
