import React from "react";
import { useScroll } from "../components/useScroll";
// Importing Styles
import styled from "styled-components";
// Router
import { Link } from 'react-router-dom';
// Importing components
import ScrollTop from "../components/ScrollTop";
// Importing Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// Importing an animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer, scrollReveal } from "../animation";

const OurWork = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return(
        <Work variants={pageAnimation} initial="hidden" animate="shown" exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}/>
                <Frame2 variants={slider}/>
                <Frame3 variants={slider}/>
                <Frame4 variants={slider}/>
            </motion.div>
            
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </Movie>

            <Movie ref={element} variants={fade} animate={controls} initial="hidden">
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                        <motion.img variants={photoAnim} src={theracer} alt="the racer" className="img-sec" />
                    </Hide>
                </Link>
            </Movie>

            <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                        <motion.img variants={photoAnim} src={goodtimes} alt="good times" className="img-third" />
                    </Hide>
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    @media (max-width: 1300px) {
        padding: 2rem;
    }

    h2 {
        padding: 1rem 0rem;
        color: white;
    }
`

const Movie = styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.2rem;
        background-color: #23d997;
        margin-bottom: 3rem;
    }
    
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        object-position: center;
    }

    .img-sec {
        object-position: top;
    }

    .img-third {
        object-position: bottom;
    }

    
`

const Hide = styled.div`
    overflow: hidden;
`

// Frame animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    background-color: #ff8efb;
`

const Frame3 = styled(Frame1)`
    background-color: #8ed2ff;
`

const Frame4 = styled(Frame1)`
    background-color: #8effa0;
`

export default OurWork;