import React, {Component} from 'react';
import Title from "../../../layout/js/Title";
import '../css/Movie.css'

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: props.match.params.movieId
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=19dd866ef4c517ef4d726559bd269cb0`)
            .then(
                results => {
                    return results.json()
                }
            ).then((data) => {
                const posterUrl = 'http://image.tmdb.org/t/p/w780' +  data.poster_path;
                let movieHtml =
                    <div className="movie-details-container">
                        <div className="movie-details__poster" style={{backgroundImage: `url(${posterUrl})`}} />
                        <div className="movie-details__info">
                            <h1 className="movie-details__info__title">{data.title}</h1>
                            <h2 className="movie-details__info__overview">{data.overview}</h2>
                        </div>
                    </div>;

                this.setState({
                    movieHtml: movieHtml
                })
            });
    }

    //component did mount

    render() {
        return (
            <section className="popular">
                <Title />
                {this.state.movieHtml}
            </section>
        );
    }
}