import React from 'react';
import {data} from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import {addMovies} from '../actions'
class App extends React.Component {
  
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate(); // NEVER USE THIS METHOD
    })
    // make api call
    // dispatch action
    store.dispatch(addMovies(data));

    console.log('state',store.getState());
  }
  
  render(){
    // const movies = this.props.store.getState();
    const { list} = this.props.store.getState();
    console.log('RENDERED', this.props.store.getState())
    return (
      <div className="App">
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favourites</div>
          </div>
          <div className='list'>
            {list.map((movie, index) =>{
              <MovieCard movie={movie} key={`movies-${index}`}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
