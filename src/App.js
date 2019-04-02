import React, { Component } from 'react';
// import logo from './logo.svg';   // JSX 코드의 {logo}의 정의
import './App.css';
import Movie from "./Movie";

// 모든 component는 render function을 가지고있다.
// render: showing something
// 컴포넌트생성 > 렌더링 > 리턴 > HTML 내용
// ++ 컴포넌트를 id없이 부르는것은 좋지 않다
class App extends Component {
	componentWillMount() {}

	state = {
		greeting: "git add를 수행했다!",
	};

	componentDidMount() {
		// api 불러오기
		fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating');
	}

	_renderMovies = () => {
		const moviess = this.state.moviess.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
		return moviess
	}

	render() {
		return (
			<div className="App">
				{this.state.moviess ? this._renderMovies() : '로딩 중...'}
			</div>
		);
	}
}

export default App;
	