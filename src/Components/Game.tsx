import React, { useState } from "react";
import { styled } from "styled-components";
import GameMedia from "./GameMedia";
import { Game as GameInterface } from "../types";
import GameInfo from "./GameInfo";
import LogoButton from "./LogoButton";
import { Row, Column } from "../Styles/StyledComponents";

interface GameProps {
  game: GameInterface;
}

const Half = styled.div<{ $isOpen?: boolean; $isInteractive?: boolean }>`
  width: 47%;
  background: ${({ $isInteractive }) => $isInteractive ? "#1e1e1e" : "transparent"};
  border-radius: 12px;
  padding: ${({ $isInteractive }) => $isInteractive ? "25px" : "0"};
  border: ${({ $isInteractive }) => $isInteractive ? "1px solid #333" : "none"};
  box-sizing: border-box;
  cursor: ${({ $isInteractive }) => $isInteractive ? "pointer" : "default"};
  transition: all 0.3s ease;
  box-shadow: ${({ $isOpen }) => $isOpen ? "0 0 20px rgba(78, 159, 61, 0.2)" : "none"};

  height: fit-content;

  &:hover {
    border-color: ${({ $isInteractive }) => $isInteractive ? "#4e9f3d" : "transparent"};
    transform: ${({ $isInteractive }) => $isInteractive ? "translateY(-5px)" : "none"};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const MediaHalf = styled(Half)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MetaContainer = styled(Column)`
  background: #1e1e1e;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #333;
  gap: 8px;
`;

const MetaLine = styled.div`
  color: silver;
  font-family: 'Segoe UI', Roboto, Helvetica, sans-serif;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DateBadge = styled.div`
  display: inline-block;
  background: #4e9f3d;
  color: #121212;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-family: "ZenDots", sans-serif;
  font-size: 1rem;
  margin-bottom: 15px;
  align-self: flex-start;
`;

const LinksContainer = styled(Row)`
  gap: 10px;
  flex-wrap: wrap;
`;

const ExpandedContent = styled(Column)`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #333;
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const SectionTitle = styled.h3`
  color: #00ced1;
  font-family: 'Oxanium', sans-serif;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const InsightText = styled.p`
  color: silver;
  font-size: 1rem;
  font-family: 'Segoe UI', Roboto, Helvetica, sans-serif;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const BulletList = styled.ul`
  color: silver;
  font-size: 1rem;
  font-family: 'Segoe UI', Roboto, Helvetica, sans-serif;
  line-height: 1.6;
  padding-left: 20px;
  
  li {
    margin-bottom: 8px;
    &::marker {
      color: #4e9f3d;
    }
  }
`;

const ReadMoreInstruction = styled.span`
  color: #4e9f3d;
  font-size: 0.9rem;
  text-align: right;
  margin-top: 15px;
  font-weight: bold;
  display: block;
`;

const Game: React.FC<GameProps> = ({ game }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Text Info Half (Clickable to Expand) */}
      <Half $isInteractive={true} $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <DateBadge>{game.date}</DateBadge>
        <GameInfo game={game} />
        
        <ReadMoreInstruction>
          {isOpen ? "Click here to minimize ↑" : "Click to expand details ↓"}
        </ReadMoreInstruction>

        {isOpen && (
          <ExpandedContent onClick={(e) => e.stopPropagation()}>
            {game.developerInsights && (
              <>
                <SectionTitle>Developer Insights</SectionTitle>
                <InsightText>{game.developerInsights}</InsightText>
              </>
            )}
            
            {game.learningOutcomes && game.learningOutcomes.length > 0 && (
              <>
                <SectionTitle>Key Learning Outcomes</SectionTitle>
                <BulletList>
                  {game.learningOutcomes.map((outcome, idx) => (
                    <li key={idx}>{outcome}</li>
                  ))}
                </BulletList>
              </>
            )}
          </ExpandedContent>
        )}
      </Half>

      {/* Media and Metadata Half (Always Visible) */}
      <MediaHalf $isInteractive={false}>
        {game.media && game.media.length > 0 && (
          <GameMedia media={game.media} />
        )}
        
        <MetaContainer>
          {game.genres && (
            <MetaLine><strong>Genres:</strong> {game.genres.join(", ")}</MetaLine>
          )}
          {/* Split platforms and engine into the second line */}
          {(game.platforms || game.engine) && (
            <MetaLine>
              {game.platforms && <span><strong>Platforms:</strong> {game.platforms.join(", ")} </span>}
              {game.engine && <span>&nbsp;&nbsp;<strong>Engine:</strong> {game.engine.join(", ")}</span>}
            </MetaLine>
          )}
        </MetaContainer>
        
        {game.links && game.links.length > 0 && (
          <LinksContainer>
            {game.links.map((link, index) => (
              <LogoButton key={index} size={35} source={link.source} linkTo={link.url} />
            ))}
          </LinksContainer>
        )}
      </MediaHalf>
    </>
  );
};

export default Game;