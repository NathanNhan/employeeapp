
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Add from './components/Add';
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/users/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
