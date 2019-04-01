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
		setTimeout(() => {
			this.setState({
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
	