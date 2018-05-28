import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import todoApplication from "./reducers";
import { HashRouter } from "react-router-dom";
import App from "./components/App.jsx";
import "./index.less";

let store = createStore(todoApplication, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById("root")
);
