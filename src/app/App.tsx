import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import MapPage from "./pages/MapPage/MapPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <main>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/map">
            <MapPage />
          </Route>
        </main>
      </Switch>
    </Router>
  );
}

export default App;
