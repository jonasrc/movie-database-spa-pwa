import React, {Component} from 'react';
import Movie from './Movie';
import '../css/MovieGrid.css';
import {Link} from "react-router-dom";

class MovieGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular/?api_key=19dd866ef4c517ef4d726559bd269cb0')
            .then(
                results => {
                    return results.json()
                }
            ).then((data) => {
                let movies = data.results.map((movie) => {
                    // if(search === "" || search.toLowerCase().match("/" + movie.title.toLowerCase() + ".*/gm")){
                        return (
                            <Link to={"/movie/" + movie.id}>
                                <Movie
                                    posterUrl={'http://image.tmdb.org/t/p/w780' + movie.poster_path}
                                    title={movie.title} />
                            </Link>
                        )
                    // }
                });

                this.setState({
                    movies: movies
                })
            });
    }

    //render
    render() {
        return(
            <div className="movie-grid-container">
                {this.state.movies}
            </div>
        );
    }
}

export default MovieGrid;
