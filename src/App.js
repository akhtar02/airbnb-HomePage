import Home from './Home'
import Header from './Header'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router >
      <Header />
        <Switch >
          <Route path = "/">
          <Home />
          </Route>

          {/* <Route>
            
          </Route> */}
        </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
