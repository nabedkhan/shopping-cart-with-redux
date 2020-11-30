import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Products />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route path="*">
            <h1>Page Does Not Exist</h1>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
