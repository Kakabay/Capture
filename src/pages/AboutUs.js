import React from "react";
// Importing components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSectio";
import FaqSecion from "../components/FaqSection";
import ScrollTop from "../components/ScrollTop";
// Importing an animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";

const AboutUs = () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="shown" exit="exit">
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
            <FaqSecion></FaqSecion>
            <ScrollTop />
        </motion.div>
    )
}

export default AboutUs;