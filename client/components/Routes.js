"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Home");
// import PageNotFound from "./PageNotFound";
var Routes = function () {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", null,
            React.createElement("main", null,
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: Home_1.default }))))));
};
exports.default = Routes;
//# sourceMappingURL=Routes.js.map