import React from "react";
// Importing Styles
import styled from "styled-components";
// Router
import { Link } from 'react-router-dom';
// Framer motion
import { motion } from "framer-motion";
// Importing Hooks
import { useLocation } from "react-router-dom";

const Nav = () => {

    const { pathname } = useLocation();


    return(
        <StyledNav>
            <h1>
                <Link id="logo" to="/">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: auto;
    padding: 1rem 10rem;

    position: sticky;
    top: 0;
    z-index: 10;

    background: #282828;

    a {
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
        align-content: center;
        list-style: none;
    }
    
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }

    li {
        padding-left: 10rem;
        position: relative;
    }

    @media (max-width: 1350px) {
        flex-direction: column;
        padding: 2rem 1rem;

        #logo {
            display: inline-block;
            margin: 2rem;
        }

        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;

            li {
                padding: 0; 
            }
        }
    }
`


export default Nav;