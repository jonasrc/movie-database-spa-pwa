import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router';
import Popular from "../pages/popular/js/Popular";

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/movies/popular">
                        <Popular/>
                    </Route>
                    <Route path="/movies/search">
                    </Route>
                </Switch>
            </Router>
        );
    }
}