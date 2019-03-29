import React, { Component } from 'react';
// import logo from './logo.svg';   // JSX 코드의 {logo}의 정의
import './App.css';
import Movie from "./Movie";

class App extends Component {
	componentWillMount() {}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				// #4-3 
				moviess: [
					{
						id: 2,
						title: "Inception",
						poster:
							"http://d1841mjet2hm8m.cloudfront.net/thumb-900/fr_1099/1620/97/a6bca513f61184bfcc9020ccd91fb61b.jpg"
					},
					{
						id: 2,
						title: "Interstellar",
						poster:
							"https://http2.mlstatic.com/dvd-interestelar-interestellar-2014-christopher-nolan-D_NQ_NP_804372-MLM26763668352_022018-F.jpg"
					}
				]
			});
		}, 1500);
	}

	// #4-3 Loading States
	// 데이터가 없을 때 '로딩'을 띄우고, 존재하면 영화정보가 보이도록 설정.
	// _(언더바)를 사용하는 이유는 리액트에는 예약어가 워낙 많아 나의 기능과 차이를 두기 위해
	_renderMovies = () => {
		// map을 돌리려고 하는데 states.movies가 없으므로 에러.
		const moviess = this.state.moviess.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
		return moviess
	}

	render() {
		return (
			<div className="App">
				{/* 데이터가 없을 때 '로딩'을 띄우고, 존재하면 영화정보가 보이도록 설정. */}
				{this.state.moviess ? this._renderMovies() : '로딩 중...'}
			</div>
		);
	}
}

export default App;
	