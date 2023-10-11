import React from "react";

// Importar estilos globales
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
} from "../styles/Global.styled";

// importar los estilos de Skills
import {
  SkillsCardContainer,
  SkillsCard,
  SkillsCard2,
} from "../styles/MySkills.styled";

import { Skills, Skillsillustration } from "../utils/Data";

const Myskills = () => {
  return (
    <PaddingContainer 
      id="Skills"
      top="10%" 
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Heading as="h4" size="h4" align="center">
        MY SKILLS
      </Heading>
      <Heading as="h2" size="h2" align="center">
        In <BlueText>Programming </BlueText>,<BlueText> Illustration </BlueText>{" "}
        and <BlueText>Animation</BlueText>
      </Heading>
      <FlexContainer responsiveFlex
        align="center"
        responsiveDirection="columnt "
        fullWidthChild>
        {/* Seccion de la izquierda */}
        <SkillsCardContainer>
          {Skills.map((skill) => (
            <SkillsCard>
              <IconContainer size="4rem" color="blue">
                {skill.icon}
              </IconContainer>

              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>

        {/* Seccion de la derecha */}
        <div>
          <SkillsCardContainer>
            {Skillsillustration.map((skill) => (
              <SkillsCard2>
                <IconContainer size="4rem" color="blue">
                  {skill.icon}
                </IconContainer>

                <Heading as="h4" size="h4">
                  {skill.tech}
                </Heading>
              </SkillsCard2>
            ))}
          </SkillsCardContainer>
        </div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Myskills;
