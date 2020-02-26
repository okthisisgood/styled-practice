import React from 'react';
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Button>Hello</Button>
      <Button danger>Bye</Button>
    </Container>
    
  );
}

const Container = styled.div`
  height:100vh;
  width:100%;
  background-color: #fed330;
`

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => props.danger ? "#fc5c65" : "#26de81" };
`

export default App;
