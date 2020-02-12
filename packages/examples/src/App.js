import React, { Component } from "react";
import ThemedReadme from "./ThemedReadme";
import ExternalContent from "./ExternalContent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ThemedReadmeCDN from "./ThemedReadmeCDN";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <h1>@loopmode/markdown examples</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/readme/">ThemedReadme</Link>
                            </li>
                            <li>
                                <Link to="/readme-cdn/">ThemedReadme CDN</Link>
                            </li>
                            <li>
                                <Link to="/external/">ExternalContent</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={() => null} />
                    <Route path="/readme" exact component={ThemedReadme} />
                    <Route path="/readme-cdn" exact component={ThemedReadmeCDN} />
                    <Route path="/external" component={ExternalContent} />
                </div>
            </Router>
        );
    }
}

export default App;
