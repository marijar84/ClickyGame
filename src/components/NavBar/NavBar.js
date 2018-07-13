import React from "react";
import "./NavBar.css";


const NavBar = props => (
    <div>
        <div class="container">
            <nav class="navbar fixed-top">
                <span class="navbar-text">
                    Clicky Game
                </span>
                <span class="navbar-text">
                    Click an image to begin!
                </span>
                <span class="navbar-text">
                    Score: {props.score}
                </span>
                <span class="navbar-text">
                Top Score: {props.topScore}
                </span>
            </nav>
        </div>
    </div>
);

export default NavBar;