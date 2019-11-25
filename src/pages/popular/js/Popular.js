import React, {Component} from 'react';
import Title from "../../../layout/js/Title";
import SearchForm from "./SearchForm";
import MovieGrid from "./MovieGrid";

function Popular() {
    return (
        <section className="popular">
            <Title />
            <SearchForm />
            <MovieGrid />
        </section>
    )
}

export default Popular;