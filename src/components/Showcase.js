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

import { ShowcaseParticleContainer, ShowcaseImageCard } from "../styles/Showcase.styled";

// Importando iconos de React
import { BsLinkedin, BsGithub } from "react-icons/bs";


// Assets
import ShowCaseImg from '../assets/showcase-img.png';

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer fullWidthChild>
        {/* Contenido de la Izquierda */}
        <div>
          <Heading as="h4" size="h4">
            Hello!
          </Heading>

          <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
            I'm <BlueText>Nicolas Molina</BlueText>
          </Heading>

          <Heading as="h3" size="h3">
            I'm a <BlueText>Frontend Developer</BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
            Hello, my name is Nicolas Moina and I'm a front-end developer I have
            been studying programming for 6 months and developing some projects
          </ParaText>

          {/* Iconos de redes Sociales */}

          <FlexContainer gap="20px">
            <IconContainer color="blue" size="1.5rem">
              <BsLinkedin />
            </IconContainer>

            <IconContainer color="blue" size="1.5rem">
              <BsGithub />
            </IconContainer>
          </FlexContainer>
        </div>
        {/* Contenido de la Derecha */}
        <FlexContainer>
            <ShowcaseParticleContainer>
                <ShowcaseImageCard>
                     <img src="ShowCaseImg" alt="showcase"/>
                </ShowcaseImageCard>
            </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
