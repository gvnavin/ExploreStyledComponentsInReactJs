import React from 'react';
import {Container, CardText, ButtonContainer} from './stylesContainer';

// For all the Styles we can use Styled Components For Better and More //modular Abstraction

const Card = (props) => {
  return (
      <Container tag ='div'>
        <CardText tag ='p'>Sample Card View </CardText>
        <ButtonContainer tag ='button' onClick = {props.click}>Click</ButtonContainer>
      </Container>
  )
}


export default Card;
