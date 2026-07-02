import React from "react";
import { styled } from "styled-components";
import { Game as GameInterface } from "../types";
import { Column } from "../Styles/StyledComponents";

interface GameInfoProps {
  game: GameInterface;
}

const GameInfoContainer = styled(Column)`
  gap: 12px;
`;

const GameTitle = styled.h1`
  font-family: "ZenDots", sans-serif;
  font-size: 1.8rem;
  color: #00ced1;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GameDescription = styled.div`
  margin: 0;
  font-size: 1.05rem;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  white-space: pre-wrap;
  line-height: 1.6;
  color: #e0e0e0;
`;

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
    return (
        <GameInfoContainer>
            <GameTitle>{game.name}</GameTitle>
            <GameDescription>{game.description}</GameDescription>
        </GameInfoContainer>
    );
};

export default GameInfo;