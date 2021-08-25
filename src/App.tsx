import logo from "./logo.svg";
import "./Sass/Sass.css";
import Examples from "./components/Examples";
import LandingPage from "./components/LandingPage";
import LinkButton from "./components/common/LinkButton";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LinkButton content="Hello" path="a" />
      </Route>
      <Route exact path="/a">
        <LandingPage />
      </Route>
    </Switch>
  );
}

export default App;
