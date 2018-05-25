import React from "react";
import {
    render
} from "react-dom";
import Todo from "./Todo";
import "./style.css";

const App = () => ( <div className = "container" >
    <div className = "app" >
    <div className = "header" >
    <p > K3M1RD1N's Todo App</p> </div> <div className = "controls" >
    <i className = "fa fa-plus active" aria-hidden = "true" / >
    <i className = "fa fa-search"
    aria-hidden = "true" / >
    </div> <Todo / >
    </div> </div>
);

render( < App / > , document.getElementById("root"));
