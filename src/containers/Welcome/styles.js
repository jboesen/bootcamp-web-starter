import styled from 'styled-components';
import background from './background.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Background = styled.div`
  background-color: lightgray;
  background-image: url(${background});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 100vh;
  height: auto;
  min-height: 100vh;
  width: 100%;
`

export const Container = styled.div`
    padding: 4% 8%;
`

export const StyledH1 = styled.h1` 
    color: white;
    display: block;
    font-family: Montserrat, sans-serif;
    font-size: 4em;
    margin: 0px auto;
    text-align: center;
    margin: 50px 0 600px;
`

export const StyledButton = styled.button`
    display: block;
    margin: 0px auto;
    padding: 15px 45px;
    border-radius: 30px;
    border: none;
    font-family: Montserrat, sans-serif;
    cursor: pointer;
    font-size: 1.2em;
    background-color: white;
    color: #06c0c1;
    transition: all 200ms;

    :hover{
        color: white;
        background-color: #06c0c1;
    }
`
// export const StyledIcon = styled(FontAwesomeIcon)`
//     color: white;
//     position: absolute;
// `