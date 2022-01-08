// import logo from './logo.svg';
// import './App.css';

import axios from "axios";
import React from "react";


class App extends React.Component{
  state ={
    isLoading: true,
     // 영화 데이터를 로딩한 다음에 movies state 에 저장하기 위함
    movies: [],
  };

 // async : getMovies() 함수는 시간이 필요해! 
 // await : axios.get() 을 기다려줘!
  getMovies = async () => {
    // const movies =await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // console.log(movies);
    // console.log(movies.data.data.movies);

    const {
      data:{
        data:{movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies);
    // this.setState({ movies: movies });
    // state의 movies[]랑 movies변수 이름이 같아서 합칠 수 있다.
    this.setState({ movies, isLoading: false });

  };

  componentDidMount() {
    // 영화 데이터 로딩!
    // setTimeout(()=>{
    //   this.setState({ isLoading: false});
    // },6000);

    this.getMovies();
  }
  render(){
    const { isLoading } = this.state;

    return(
      <div>
        {isLoading
        ? '로딩중...'
        : '준비됨...'}
      </div>
    );
  }
}

export default App;
