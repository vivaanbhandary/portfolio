import React from "react";
import { styled } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";
import LogoButton from "./LogoButton";

const SelfSummaryContainer = styled(Column)`
`;

const TopRow = styled(Row)`
  justify-content: space-between;
  flex-wrap: wrap; /* Allows icons to drop below the title if space runs out */
  gap: 10px;
`
const Title = styled.div`
  font-size: 3.2em;
  font-family: "Blonden", sans-serif;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 6.4em; /* 6.4 * 15px = 96px (Restores original size) */
    line-height: 1.1; /* Keeps the spacing tight if it wraps */
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-family: 'Segoe UI', sans-serif;
  color: silver;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.2rem; /* 2.2 * 15px = 33px (Restores original size) */
    line-height: 1.4;
  }
`;


const SelfSummary: React.FC = () => {
  return (
    <SelfSummaryContainer>
      <TopRow>
        <Title>{PersonalInfo.name}</Title>
        <Row>
          <LogoButton source="/images/logos/github.png" size={50} margin={8} linkTo={PersonalInfo.links.github} />
          <LogoButton source="/images/logos/linkedIn.png" size={50} margin={8} linkTo={PersonalInfo.links.linkedIn} />
        </Row>
      </TopRow>
      <Description>{PersonalInfo.introduction}</Description>
    </SelfSummaryContainer>
  );
};

export default SelfSummary;
