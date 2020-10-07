import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {fetchCharacters} from "./store/actions";
import './App.css';

function App(props) {
  // const [url, setUrl] = useState(
  //   "https://rickandmortyapi.com/api/character"
  // );

  // useEffect(() => {
  //   fetchCharacters(url);
  // }, [fetchCharacters, url]);

  const fetchCharacters = e => {
    e.preventDefault();
    props.fetchCharacters()
  }

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      {props.characters.map((character) => (
        <h2 key={character.id}>{character.name}</h2>
      ))}
      <button onClick={fetchCharacters}>Get Characters</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error,
  }
}

export default connect(mapStateToProps, {fetchCharacters}) (App);
