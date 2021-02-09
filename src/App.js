import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    //const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // console.log(movies);
    // console.log(movies.data.data.movies);

    //구조 분해 할당
    const {
      data: {
        data: {movies},
      }, 
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    this.setState({movies, isLoading: false}); //ES6에서 객체의 키와 대입할 변수의 이름이 같으면 코드 축약 가능 {movies}

  }

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // }, 6000);
    this.getMovies();

  }

  render(){

    const {isLoading, movies} = this.state;
    
    return(
      <section className="container">
      {isLoading ? (
      <div className="loader">
      <span className="loader__text">Loading...</span>
      </div>
      ): (
      <div className="movies"> 
      {movies.map(movie => (
      //console.log(movie);

      <Movie 
          key = {movie.id}
          id = {movie.id}
          year = {movie.year}
          title = {movie.title}
          summary = {movie.summary}
          poster = {movie.medium_cover_image}
          genres = {movie.genres}
          />
        ))}
         </div>
      )}
      </section>
    );
  }
}

export default App;
