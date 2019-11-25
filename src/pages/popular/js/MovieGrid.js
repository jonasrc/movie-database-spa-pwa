import React, {Component} from 'react';
import Movie from './Movie';
import '../css/MovieGrid.css';

class MovieGrid extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        };
    }

    //component did mount
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular/?api_key=19dd866ef4c517ef4d726559bd269cb0')
            .then(
                results => {
                    return results.json()
                }
            ).then((data) => {
                let movies = data.results.map((movie) => {
                    return (
                        <a href="/movies/search">
                            <Movie
                                key={movie.uniqueId}
                                posterUrl={'http://image.tmdb.org/t/p/w780' + movie.poster_path}
                                title={movie.title} />
                        </a>
                    )
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
