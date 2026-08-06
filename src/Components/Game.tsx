import React, { useState } from "react";
import { styled } from "styled-components";
import GameMedia from "./GameMedia";
import { Game as GameInterface } from "../types";
import GameInfo from "./GameInfo";
import LogoButton from "./LogoButton";
import { Row, Column } from "../Styles/StyledComponents";
import { Link } from "react-router-dom";

interface GameProps {
  game: GameInterface;
}

const Half = styled.div<{ $isOpen?: boolean; $isInteractive?: boolean; $isWriteup?: boolean }>`
  width: 47%;
  background: ${({ $isInteractive, $isWriteup }) => 
    $isInteractive 
      ? ($isWriteup ? "#0f172a" : "#1e1e1e") // #0f172a is a sleek dark-blue that fits dark mode
      : "transparent"};
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
    min-width: 0; 
    margin-bottom: 20px;
  }
`;

const EngineTitle = styled.h4`
  color: #00ced1;
  font-family: 'ZenDots', sans-serif;
  margin: 0 0 15px 0;
  font-size: 1.5rem; /* Made larger */
  font-weight: bold; /* Added bold */
  text-align: center; /* Centered */
  letter-spacing: 1px;

  word-break: break-word;
  overflow-wrap: anywhere;
`;

const MediaHalf = styled(Half)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MetaContainer = styled(Column)<{ $isWriteup?: boolean }>`
  background: ${({ $isWriteup }) => ($isWriteup ? "#0f172a" : "#1e1e1e")};
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #333;
  gap: 8px;
`;

const MetaLine = styled.div`
  color: silver;
  font-family: 'Segoe UI', Roboto, Helvetica, sans-serif;
  font-size: 0.9rem;
  line-height: 1.5; 
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

const ReadArticleButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px; /* Reverted to original padding */
  width: fit-content; /* NEW: Forces the button to only be as wide as its text */
  background-color: #00ced1;
  color: #121212;
  font-weight: bold;
  font-family: 'Oxanium', sans-serif;
  text-decoration: none;
  border-radius: 8px; /* Reverted to original corners */
  margin-top: 10px;
  transition: transform 0.2s ease, background-color 0.2s ease;
  
  /* Retaining the text-color fixes from before */
  &:hover, &:focus, &:active {
    background-color: #00a8a8;
    color: #121212; 
    transform: translateY(-2px);
  }

  &::selection, & *::selection {
    background-color: rgba(255, 255, 255, 0.4); 
    color: #121212; 
  }
`;

const Game: React.FC<GameProps> = ({ game }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isWriteup = game.genres?.includes("Writeup") ?? false;

  return (
    <>
      {/* Pass $isWriteup down to the interactive half */}
      <Half $isInteractive={true} $isOpen={isOpen} $isWriteup={isWriteup} onClick={() => setIsOpen(!isOpen)}>
        <DateBadge>{game.date}</DateBadge>
        <GameInfo game={game} />
        
        {game.developerInsights && (<ReadMoreInstruction>
          {isOpen ? "Click here to minimize ↑" : "Click to view Dev Insights & Learning Outcomes ↓"}
        </ReadMoreInstruction>
        )}

        {game.developerInsights && isOpen && (
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

        {/* Pass $isWriteup to MetaContainer */}
        <MetaContainer $isWriteup={isWriteup} style={{ marginTop: '20px' }}>
          {game.genres && (
            <MetaLine><strong>Genres:</strong> {game.genres.join(", ")}</MetaLine>
          )}
          
          {/* Display tools, engine removed from here since it has its own title */}
          {game.tools && (
            <MetaLine>
              <span><strong>Tools:</strong> {game.tools.join(", ")} </span>
            </MetaLine>
          )}

          {game.techniques && (
            <MetaLine>
              <span><strong>Techniques:</strong> {game.techniques.join(", ")} </span>
            </MetaLine>
          )}
        </MetaContainer>
      </Half>

      {/* Media and Metadata Half */}
      <MediaHalf $isInteractive={false}>
        
        {game.engine && game.engine.length > 0 && (
          <EngineTitle>Made using: {game.engine.join(" / ")}</EngineTitle>
        )}

        {game.media && game.media.length > 0 && (
          <GameMedia media={game.media} />
        )}

        {game.articleUrl && (
          <ReadArticleButton to={game.articleUrl}>
            Read Full Essay
          </ReadArticleButton>
        )}
        
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