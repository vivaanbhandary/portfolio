import React from "react";
import { styled } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";
import LogoButton from "./LogoButton";

const SelfSummaryContainer = styled(Column)`
`;

const TopRow = styled(Row)`
  justify-content: space-between;
`
const Title = styled.div`
  font-size: 3.2em;
  font-family: "Blonden", sans-serif;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-family: 'Segoe UI', sans-serif;
  color: silver;
  margin: 0;
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
