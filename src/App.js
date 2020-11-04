import Home from './Home'
import Header from './Header'
import Footer from './Footer'
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
        <Footer />
      </Router>
     
      
    </div>
  );
}

export default App;
