import './Home.css';
import axios from "axios";
import React from "react";
import Movie from '../components/Movie';


class Home extends React.Component{
  state ={
    isLoading: true,
    movies: [],
  };

 
  getMovies = async () => {
    const {
      data:{
        data:{movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return(
      <section className='container'>
        {isLoading
        ? <div className="loader">
            <span className="loader_text">로딩중...</span>
          </div>
        : (
          <div className="movies">
          {movies.map(영화=>(
            <Movie 
              key={영화.id}
              id={영화.id}
              year={영화.year}
              title={영화.title}
              summary={영화.summary}
              poster={영화.medium_cover_image}
              genres={영화.genres}
            />
            ))}
        </div>
        )}
      </section>
    );
  }
}

export default Home;
