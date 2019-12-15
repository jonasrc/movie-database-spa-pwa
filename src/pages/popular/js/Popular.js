import React, {Component} from 'react';
import Title from "../../../layout/js/Title";
import SearchForm from "./SearchForm";
import MovieGrid from "./MovieGrid";

export default class Popular extends Component {
    constructor() {
        super();
        // this.state = {
        //     post: {
        //         search: ""
        //     },
        //     search: ""
        // }
    }

    // handleChange = event => {
    //     const { name, value } = event.target;
    //     this.setState(prevState => ({
    //         post: { ...prevState.post, [name]: value }
    //     }));
    // };
    //
    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.setState(prevState => ({
    //         search: prevState.search
    //     }));
    // };

    render() {
        return (
            <section className="popular">
                <Title />
                <SearchForm />
                <MovieGrid />
            </section>
        );
    }
}