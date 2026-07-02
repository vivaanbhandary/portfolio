import React from "react";
import styled from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";
import LogoButton from "../Components/LogoButton";

const Container = styled(Column)`
  align-items: center;
  margin-top: 40px;
  gap: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  background: #1e1e1e;
  border-radius: 15px;
  border: 1px solid #333;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #4e9f3d;
  box-shadow: 0 0 20px rgba(78, 159, 61, 0.3);

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const NameTitle = styled.h1`
  font-family: "ZenDots", sans-serif;
  color: white;
  margin: 0;
  font-size: 2.5rem;
`;

const RoleSubtitle = styled.h2`
  color: #00ced1;
  font-family: "Oxanium", sans-serif;
  margin: 0;
  font-size: 1.5rem;
`;

const AboutText = styled.p`
  line-height: 1.8;
  font-size: 1.2rem;
  color: silver;
  text-align: center;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonRow = styled(Row)`
  gap: 20px;
  margin-top: 20px;
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 25px;
  font-size: 18px;
  font-weight: bold;
  color: #121212;
  background-color: #4e9f3d;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    background-color: #3e8f32;
    transform: translateY(-2px);
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid #333;
`;

const ContactItem = styled(Column)`
  align-items: center;
  gap: 10px;
  color: silver;
`;

const EmailSection = styled(Column)`
  align-items: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #333;
  width: 100%;
`;

const EmailLink = styled.a`
  color: #00ced1;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 10px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4e9f3d;
  }
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      {/* <ProfileImage src={PersonalInfo.image} alt={PersonalInfo.name} /> */}
      <Column style={{ alignItems: "center", gap: "10px" }}>
        <NameTitle>{PersonalInfo.name}</NameTitle>
        <RoleSubtitle>{PersonalInfo.role}</RoleSubtitle>
      </Column>

      <AboutText>{PersonalInfo.description}</AboutText>

      <ButtonRow>
        <CVButton href={`${PersonalInfo.cvUri}`} download>
          Download Resume (PDF)
        </CVButton>
      </ButtonRow>

      <ContactGrid>
        <ContactItem>
          <strong>GitHub</strong>
          <LogoButton source="/images/logos/github.png" size={50} linkTo={PersonalInfo.links.github} />
        </ContactItem>
        <ContactItem>
          <strong>LinkedIn</strong>
          <LogoButton source="/images/logos/linkedIn.png" size={50} linkTo={PersonalInfo.links.linkedIn} />
        </ContactItem>
      </ContactGrid>

      <EmailSection>
        <span style={{ color: "silver" }}>Let's connect:</span>
        <EmailLink href="mailto:vivaanbhandary@gmail.com">
          vivaanbhandary@gmail.com
        </EmailLink>
      </EmailSection>
    </Container>
  );
};

export default AboutMe;