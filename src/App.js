import React from 'react';
import axios from 'axios';

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
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');

    this.setState({movies: movies, isLoading: false}); //ES6에서 객체의 키와 대입할 변수의 이름이 같으면 코드 축약 가능 {movies}

  }

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // }, 6000);
    this.getMovies();

  }

  render(){

    const {isLoading} = this.state;
    
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;

  }
}

export default App;
