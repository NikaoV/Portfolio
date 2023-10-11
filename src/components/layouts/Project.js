import React from 'react'
// Importar estilos globales
import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from '../../styles/Global.styled'

// Importar estilos de Project
import {
    TechStackCard,
    ProjectImage,
    ProjectImageContainer,
} from '../../styles/MyProjects.styled'

// importar assets
import { FaGithub } from 'react-icons/fa'
import Project1 from '../../assets/Project1.png'
import Project2 from '../../assets/Project2.png'


const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>
        <div>
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

            <Button> Visit Website</Button>
        </div>
    {/* Seccion de la derecha */}

        <ProjectImageContainer justify="flex-end">
            <ProjectImage src={data. project_Img} alt={data.project_name} />
        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project