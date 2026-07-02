import React from "react";
import { styled } from "styled-components";
import Game from "../Components/Game";
import { games } from "../data";

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  /* The vertical timeline line */
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #4e9f3d;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    z-index: 1;
    opacity: 0.5;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineRow = styled.div<{ $isEven: boolean }>`
  display: flex;
  flex-direction: ${({ $isEven }) => ($isEven ? 'row' : 'row-reverse')};
  width: 100%;
  justify-content: space-between;
  position: relative;
  padding: 30px 0;
  margin-bottom: 60px; /* Added large space between projects */
  box-sizing: border-box;
  z-index: 2;

  /* The timeline dot */
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #222;
    border: 4px solid #4e9f3d;
    top: 45px;
    left: 50%;
    margin-left: -14px;
    border-radius: 50%;
    z-index: 3;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 50px;
    padding-right: 10px;
    margin-bottom: 40px;
    &::after {
      left: 20px;
      margin-left: -14px;
    }
  }
`;

const MainPage: React.FC = () => (
  <TimelineContainer>
    {games.map((game, index) => (
      <TimelineRow key={index} $isEven={index % 2 === 0}>
        <Game game={game} />
      </TimelineRow>
    ))}
  </TimelineContainer>
);

export default MainPage;