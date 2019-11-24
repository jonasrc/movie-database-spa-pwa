import React from 'react';
import ReactDOM from 'react-dom';
import PageTitle from './mainPage/js/PageTitle';
import SearchForm from './mainPage/js/SearchForm';
import './index.css';

function MainPage() {
    return (
        <section className="mainPage">
            <PageTitle />
            <SearchForm />
        </section>
    );
}

ReactDOM.render(
    <MainPage />,
    document.getElementById('root')
);
