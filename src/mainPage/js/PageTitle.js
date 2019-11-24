import React, {Component} from 'react';
import '../css/PageTitle.css';

function PageTitle(props) {
    return (
        <div className="title-container">
            <h1 className="title-container__title">Movie Database API SPA PWA!</h1>
            <h2 className="title-container__subtitle">Powered by <a href="https://www.themoviedb.org/">The Movie Database</a></h2>
        </div>
    );
}

export default PageTitle;