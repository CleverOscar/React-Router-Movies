import React from 'react';
import {useHistory} from 'react-router-dom';

export default function SavedList(props) {

  let history = useHistory();

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <button type="button"  className="home-button" onClick={()=> history.push('/')} > Home </button>
    </div>
  );
}
 