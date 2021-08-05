import './App.css';
import Event from './components/screen/Event.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Udevega from './components/screen/Udevega';
import PowerSurge from './components/screen/PowerSurge';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Event />
        </Route>
        <Route exact path="/udevega">
          <Udevega />
        </Route>
        <Route exact path="/surge">
          <PowerSurge />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
