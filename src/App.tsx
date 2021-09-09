import logo from "./logo.svg";
import "./Sass/Sass.css";
import LandingPage from "./components/LandingPage";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
