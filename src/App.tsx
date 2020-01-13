import * as React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalProps } from "./interfaces";

import store from "./store";

const Hello: React.FC = () => <h1>Olá React!</h1>;
const NotFound: React.FC = () => <h1>Página não encontrada!</h1>;

const App: React.FC<GlobalProps> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Hello} />
          <Redirect to="/" />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
