import React from "react";
import { render } from "react-dom";
import App from "./components/AppRoutes";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import "react-select/dist/react-select.css";

store.subscribe(() => {
  console.log(store.getState());
});

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(app, document.getElementById("app-root"));
