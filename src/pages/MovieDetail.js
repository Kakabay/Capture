import React, { useState, useEffect } from "react";
// Importing styles
import styled, { css } from "styled-components";
// Router
import { useNavigate } from 'react-router-dom';
// Importing Data
import { MovieState } from '../movieState';
// Importing an animations
import { animate, motion } from 'framer-motion';
import { pageAnimation } from "../animation";

const MoviesDetail = () => {
    const url = window.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    // useEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    
    return(
        <>
            {movie && (
                <Details variants={pageAnimation} initial="hidden" animate="shown" exit="exit">
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <StyledImg src={movie.mainImg} alt={movie.title}/>
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award title={award.title} description={award.description} key={award.title}/>
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <StyledSecImg src={movie.secondaryImg} alt={movie.title} />
                    </ImageDisplay>
                </Details>
            )}
        </>
    )
}

const Details = styled(motion.div)`
    color: white;
`

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 15vh;
    position: relative;

    h2 {
        /* position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%); */
        text-align: center;
        margin-bottom: 2rem;
    }

`

const StyledImg = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;

    ${props =>
        props.alt === "The Athlete" &&
        css`
            object-position: center;
        `
    }
    ${props =>
        props.alt === "The Racer" &&
        css`
            object-position: center;
        `
    }
    ${props =>
        props.alt === "Good Times" &&
        css`
            object-position: bottom;
        `
    }
`

const StyledSecImg = styled.img`
    height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
    
    ${props =>
        props.alt === "The Racer" &&
        css`
            object-position: bottom;
        `
    }
`
    
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5rem 10rem;

    @media (max-width: 1500px) {
        display: block;
        margin: 2rem;              
    }
`

const StyledAward = styled.div`
    padding: 5rem;

    h3 {
        font-size: 2rem;
    }

    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }

    p {
        padding: 2rem 0rem;
    }
`

const ImageDisplay = styled.div`
    min-height: 50px;
`

// Award component
const Award = ( { title, description } ) => {
    return(
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    )
}

export default MoviesDetail;