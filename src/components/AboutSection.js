import React from "react";
// Styles
import styled from "styled-components";
import {Container, Description, Image, Hide } from "../styles";
// Importing images
import home1 from "../img/home1.png";
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim, scrollReveal } from "../animation";
// Importing components
import Wave from "./Wave";

const AboutSection = () => {
    // Framer motion animations
   
    return(
        <Container >
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dream</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>

            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </Image>
            <Wave />
        </Container>
    )
}

// Styled Components


export default AboutSection;