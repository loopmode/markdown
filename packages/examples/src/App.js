import React, { Component } from "react";
import ExternalContent from "./ExternalContent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Readme from "./Readme";
import ReadmeCDN from "./ReadmeCDN";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <h1>@loopmode/markdown examples</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Empty</Link>
                            </li>
                            <li>
                                <Link to="/readme/">Readme</Link>
                            </li>
                            <li>
                                <Link to="/readme-cdn/">Readme CDN</Link>
                            </li>
                            <li>
                                <Link to="/external/">External content</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={() => null} />
                    <Route path="/readme" exact component={Readme} />
                    <Route path="/readme-cdn" exact component={ReadmeCDN} />
                    <Route path="/external" component={ExternalContent} />
                </div>
            </Router>
        );
    }
}

export default App;
