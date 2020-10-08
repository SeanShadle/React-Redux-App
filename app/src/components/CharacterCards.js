import React from 'react';
import Card from './Card'
import {connect} from 'react-redux'
import styled from "styled-components"

const CharacterCards = (props) => {
    return (
        <StyledWrapper className="card-wrapper">
            {props.characters.map(character => {
                return <Card character={character} />
            })}
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        characters: state.characters,
    }
}

const StyledWrapper = styled.div`
background-color: black;
`

export default connect(mapStateToProps)(CharacterCards);