import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/AppRouter";
import './index.css';
import * as serviceWorker from './serviceWorker';

function AppPage() {
    return (
        <AppRouter/>
    );
}

ReactDOM.render(
    <AppPage/>,
    document.getElementById('root')
);

serviceWorker.unregister();