import React from "react";
import { motion } from "framer-motion";

// Importar estilos globales
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";

// Importar estilos de Project
import {
  TechStackCard,
  ProjectImage,
  ProjectImageContainer,
} from "../../styles/MyProjects.styled";

// importar assets
import { FaGithub } from "react-icons/fa";
import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variant";

const Project = ({ data }) => {
  return (
    <FlexContainer
      direction={data.reverse ? "row-reverse" : false}
      fullWidthChild
    >
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
          {/* Seccion de la izquierda */}
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>

          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>
        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem ">
          {data.project_desc}
        </ParaText>

        <Button 
         padding="1rem 2rem"
        id="0"
        href={data.id ? 'https://swipe-three.vercel.app/' : 'https://migracion-hotels.vercel.app/'}>
          Visit Website
        </Button>

        {/* <Button 
        id="1"
        href="https://swipe-three.vercel.app/">
          Visit Website
        </Button> */}
      </motion.div>
      {/* Seccion de la derecha */}

      <ProjectImageContainer
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        justify={data.reverse ? "flex-start" : "flex-end"}
      >
        <ProjectImage src={data.project_Img} alt={data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
