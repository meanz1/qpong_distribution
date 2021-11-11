import "./App.css";
import MainPage from "./main";
import CodePage from "./code";
import InfoPage from "./info";
import Info001 from "./info001";
import Info002 from "./info002";
import Info003 from "./info003";
import { Switch, Route, Link, useHistory } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <MainPage />
      </Route>
      <Route exact={true} path="/code">
        <CodePage />
      </Route>
      <Route exact={true} path="/info">
        <InfoPage />
      </Route>
      <Route exact={true} path="/info001">
        <Info001 />
      </Route>
      <Route exact={true} path="/info002">
        <Info002 />
      </Route>
      <Route exact={true} path="/info003">
        <Info003 />
      </Route>
    </Switch>
  );
}

export default App;
