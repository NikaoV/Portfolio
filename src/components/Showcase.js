import React from "react";

// Importando stilos globales

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  BlueText,
  ParaText,
  IconContainer,
} from "../styles/Global.styled";
// Importando stilos de ShowCase

import {
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Particle,
} from "../styles/Showcase.styled";

// Importando iconos de React
import { BsLinkedin, BsGithub } from "react-icons/bs";

// Assets
import ShowCaseImg from "../assets/showcase-img.png";
import BackgroundImg from "../assets/particle.png";
import BackgroundImg1 from "../assets/particle2.png";
import BackgroundImg2 from "../assets/particle3.png";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="15%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer fullWidthChild >
        {/* Contenido de la Izquierda */}
        <div>
          <Heading as="h4" size="h4">
            Hello!
          </Heading>

          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText>Nicolas Molina</BlueText>
          </Heading>

          <Heading as="h3" size="h3">
            I'm a <BlueText>Frontend Developer</BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
            I have been studying <BlueText>programming</BlueText> for 6 months
            and developing some <BlueText>projects</BlueText> , I have 2 years
            of experience in <BlueText>Illustration </BlueText> and I have also
            been studying <BlueText>3D Animation</BlueText> for a year.
          </ParaText>

          {/* Iconos de redes Sociales */}

          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="blue" size="1.5rem">
              <BsLinkedin />
            </IconContainer>

            <IconContainer color="blue" size="1.5rem">
              <BsGithub />
            </IconContainer>
          </FlexContainer>
        </div>
        {/* Contenido de la Derecha */}
        <FlexContainer justify="flex-end" margin="70px">
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowCaseImg} alt="showcase  " />
            </ShowcaseImageCard>

            <Particle
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
              width="70px"
            />

            <Particle
              src={BackgroundImg1}
              alt="particle"
              top="40px"
              right="-70px"
              rotate="0deg"
              width="70px"
            />

            <Particle
              src={BackgroundImg2}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
              width="70px"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
