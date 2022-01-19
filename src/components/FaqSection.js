import React, { useState } from "react";
import { useScroll } from "./useScroll";
// Imprting Styles
import styled from "styled-components";
import {Container} from "../styles";
// Importing Components
import Toggle from "./Toggle";
// Framer motion
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from '../animation';


const FaqSecion = () => {

    const [element, controls] = useScroll();

    return(
        <FaqContainer variants={scrollReveal} initial="hidden" animate={controls} ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>

            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis?</p>
                        </div>
                </Toggle>

                <Toggle title="Daily Schedule.">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis?</p>
                    </div>
                </Toggle>

                <Toggle title="Diferrent Payment Methods."> 
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis?</p>
                    </div>
                </Toggle>

                <Toggle title="What Products Do You Offer.">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis?</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>

        </FaqContainer>
    )
}

const FaqContainer = styled(Container)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;

        p {
            padding: 1rem 0rem;
        }
    }
`

export default FaqSecion;