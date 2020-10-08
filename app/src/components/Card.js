import React from 'react';
import styled from "styled-components"

const Card = ({character}) => {

    return (
        <StyledParentDiv>
            <StyledCard className='card'>
                <StyledH1>{character.name}</StyledH1>
                <div className="card-image-wrapper">
                    <StyledImg
                        alt={character.name}
                        className="card-image"
                        src={character.image}
                    />
                </div>
                <InfoDiv className = "info-wrapper">
                    <p><b>Species</b>: {character.species}</p>
                    <p><b>Gender:</b> {character.gender}</p>
                    <p><b>Status:</b> {character.status}</p>
                    <p><b>Location:</b> {character.origin.name}</p>
                </InfoDiv>
            </StyledCard>
        </StyledParentDiv>
    )
}

const StyledParentDiv = styled.div`
    box-sizing: border-box;
    height:75vh;
    background-color: black;
    width: 33%;
`

const StyledCard = styled.div`
    background-color: #f7f7f7;
    width: 50%;
    height: 65vh;
    border-radius: 10px;
    margin-left: 10vw;
`

const StyledH1 = styled.h1`
    padding-top: 3vh;
`
const InfoDiv = styled.div`
    padding-top: 3vh;
    text-align: left;
    margin-left: 4.5vw;
`

const StyledImg = styled.img`
    border-radius: 10px;
`

export default Card;