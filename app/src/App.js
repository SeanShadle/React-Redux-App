import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {fetchCharacters} from "./store/actions";
import './App.css';
import CharacterCards from "./components/CharacterCards";
import styled from "styled-components"

function App(props) {
  const fetchCharacters = e => {
    e.preventDefault();
    props.fetchCharacters()
  }

  return (
    <StyledDiv className="App">
      <img src="https://i.redd.it/o6cwlzg3exk41.png" alt="header" />
      <CharacterCards />
      <StyledButton onClick={fetchCharacters}>SHOW ME WHAT YOU'VE GOT</StyledButton>
    </StyledDiv>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error,
  }
}

const StyledDiv = styled.div`
  background-color: black;
  height: 100vh;
`

const StyledButton = styled.button`
  padding: 3rem;
  margin-top: 5vh;
  background-color: #97ce4c;
  border-radius: 20px;
  font-size: 2rem;
  font-family: 'Creepster', cursive;
  color: #e89ac7;
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
  border: 2px solid #97ce4c;
`

export default connect(mapStateToProps, {fetchCharacters}) (App);
