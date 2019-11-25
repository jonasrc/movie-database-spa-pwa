import React from 'react';
import '../css/Movie.css'

function Movie(props) {
    return (
        <div className="movie-container">
            <div className="movie-container__poster" style={{backgroundImage: `url(${props.posterUrl})`}} />
            {/*<img src={props.posterUrl} />*/}
            <p className="movie-container__title">{props.title}</p>
        </div>
    );
}

export default Movie;