import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';
import Popular from "../pages/popular/js/Popular";
import Movie from "../pages/movie/js/Movie";

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/movies/popular">
                        <Popular/>
                    </Route>
                    <Route path="/movies/search">
                        <Movie/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}