import React, { Component } from 'react';
import logo from './logo.svg';   // JSX 코드의 {logo}의 정의
import './App.css';
import Movie from "./Movie";





// 모든 component는 render function을 가지고있다.
// render: showing something
// 컴포넌트생성 > 렌더링 > 리턴 > HTML 내용
// ++ 컴포넌트를 id없이 부르는것은 좋지 않다
class App extends Component {
  componentWillMount() {}

  // #4-1 Thinking in React: Component State
  // - 5초 뒤에 status를 변경시켜 출력해보자.

  state = {
    greeting: "hello!",
    // #4-2
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     // this.state.greeting = 'something'; // state를 바로 변경하면 아니 된다.
  //     // setState를 이용해야한다.
  //     this.setState({
  //       greeting: "Hello AGAIN!!!"
  //     });
  //   }, 2000);
  // }


  componentDidMount() {
    // setTimeout(function(){
    //   console.log('Helllo');
    // }, 1000)
    setTimeout(() => {
      this.setState({
        // moviess: [
        //   ...this.state.moviess,
        //   {
        //     id: 5,
        //     title: "Tazza",
        //     poster:
        //       "https://m.media-amazon.com/images/M/MV5BMTU1MjQ0ODMzMF5BMl5BanBnXkFtZTgwNjI5ODc1MjE@._V1_.jpg"
        //   }
        // ]
        // #4-3 
        moviess: [
          {
            id: 1,
            title: "Matrix",
            poster:
              "http://d1841mjet2hm8m.cloudfront.net/thumb-900/fb_1125/1620/87/162d590ff7add03ed518dfe3150c0c13.jpg"
          },
          {
            id: 2,
            title: "Inception",
            poster:
              "http://d1841mjet2hm8m.cloudfront.net/thumb-900/fr_1099/1620/97/a6bca513f61184bfcc9020ccd91fb61b.jpg"
          },
          {
            id: 3,
            title: "Oldboy",
            poster: "https://i.ytimg.com/vi/VwIIDzrVVdc/maxresdefault.jpg"
          },
          {
            id: 4,
            title: "Interstellar",
            poster:
              "https://http2.mlstatic.com/dvd-interestelar-interestellar-2014-christopher-nolan-D_NQ_NP_804372-MLM26763668352_022018-F.jpg"
          }
        ]
      });
      // console.log('Helllo');
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.greeting} */}
        {/* array선택.해당항목들을 Mapping */}
        {this.state.moviess.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />;
        })}
      </div>
    );
  }
}

export default App;
  