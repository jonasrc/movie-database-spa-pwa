import React from 'react';
import ReactDOM from 'react-dom';
import Popular from "./pages/popular/js/Popular";
import AppRouter from "./router/AppRouter";
import './index.css';

function AppPage() {
    return (
        <div>
            <AppRouter/>
        </div>
    );
}

ReactDOM.render(
    <AppPage/>,
    document.getElementById('root')
);