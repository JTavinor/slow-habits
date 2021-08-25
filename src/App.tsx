import logo from "./logo.svg";
import "./Sass/Sass.css";
import Examples from "./components/Examples";
import LandingPage from "./components/LandingPage";
import LinkButton from "./components/common/LinkButton";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
