import React from "react";
import {
  AppRegistry,
} from "react-vr";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ConnectedRouter, connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from "history/createMemoryHistory";
import reducers from "./src/reducers";
import App from "./src/containers/App";

const history = createHistory();

const middlewares = [
  thunk,
  routerMiddleware(history),
];

const composer = process.env.NODE_ENV !== "production" ? composeWithDevTools : compose;

const store = createStore(
  connectRouter(history)(reducers),
  composer(
    applyMiddleware(...middlewares),
  ),
);

// eslint-disable-next-line
export default class InstagramView extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

AppRegistry.registerComponent("InstagramView", () => InstagramView);
