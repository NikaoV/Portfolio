import React from "react";

import { motion } from "framer-motion";
import { MdOutgoingMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsLinkedin, BsGithub } from "react-icons/bs";

// importar estilos globales
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
  IconContainer,
} from "../styles/Global.styled";
import { navLinks } from "../utils/Data";

// Importar estilos del Footer
import { ContactForm, FormLabel, FormInput } from "../styles/Footer.styled";

import { fadeInBottomVariant } from "../utils/Variant";

const Footer = ({}) => {
  return (
    <PaddingContainer id="Contact" top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>

      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>
      </Heading>

      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
          >
            <PaddingContainer bottom="2rem">
              <Heading as="h4" size="h4" align="center">
                <BsFillTelephoneFill /> Cellphone:
              </Heading>
              <FormInput align="center"> 3112323503</FormInput>
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <Heading as="h4" size="h4" align="center">
                <MdOutgoingMail /> Email:
              </Heading>
              <FormInput align="center">nikaovictory@hotmail.com</FormInput>
            </PaddingContainer>

            <FlexContainer gap="20px" responsiveFlex>
              <IconContainer
                left="195px"
                right="-195px"
                bottom="20px"
                align="center"
                color="blue"
                size="1.5rem"
              >
                <a
                href="https://github.com/NikaoV"
                target="_blank"
                >
                  <BsLinkedin />
                </a>
              </IconContainer>

              <IconContainer
                left="195px"
                right="-195px"
                bottom="20px"
                align="center"
                color="blue"
                size="1.5rem"
              >
                <a

                href="https://github.com/NikaoV"
                target="_blank"
                >
                <BsGithub />
                </a>
              </IconContainer>
            </FlexContainer>

            <FlexContainer justify="center" responsiveFlex>
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  href={`#${link.href}`}
                  padding="10px 5rem"
                >
                  {link.name}
                </Button>
              ))}
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
// Exportar