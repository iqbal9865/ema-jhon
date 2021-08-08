import Shop from "./components/Shop/Shop";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Review from "./components/Review/Review";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/manageInventory">
            <ManageInventory />
          </Route>
          <Route path="/product/:key">
            <ProductDetails />
          </Route>
          <Route exact path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
