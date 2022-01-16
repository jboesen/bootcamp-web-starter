import React from 'react'
import { Background, Container, StyledH1, StyledButton, StyledIcon } from './styles'

const Welcome = () => {
  return (
    <Background>
      <Container>
        <StyledH1>Text / name of our App</StyledH1>
        {/* <StyledIcon icon={}></StyledIcon> */}
        <StyledButton>Log in or create your account</StyledButton>
      </Container>
    </Background>
  )
}
export default Welcome
