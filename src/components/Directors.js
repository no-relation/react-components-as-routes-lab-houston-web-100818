import React from 'react';
import { directors } from '../data';
// import Directors from './Directors';
import Movies from './Movies';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => {
        return (
          <div key={director.name} >
            <h2 >Name: {director.name} </h2>
            <p>Movies</p>
            <ul>
              {director.movies.map((movie)=> {
                return <li key={movie}>{movie}</li>
              } ) }
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
