import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


//Component는 need to show something
// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <MoviePoster poster={this.props.poster} />
//       </div>
//     );
//   }
// }

function Movie({title, poster}) {
    return (
        <div>
            {/* 클래스가 아니므로 this.props를 삭제해야한다. */}
            {/* 클래스 안에는 this라는 키워드가 존재한다. */}
            <h1>{title}</h1>
            <MoviePoster poster={poster} />
        </div>
    )

}

// functional componant
function MoviePoster({poster}) {
    return (
        <img src={poster} alt="!" />        
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}
// MoviePoster.propTypes = {
//     poster: PropTypes.number.isRequired
// }

export default Movie;