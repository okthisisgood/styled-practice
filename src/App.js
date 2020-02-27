import React from 'react';
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
  } 
`

const Input = styled.input.attrs({
  required: true
})`
  border-radius: 5px;
`;

function App() {
  return (<Container>
    <Input placeholder="hello"></Input>
  </Container>);
  // return (
  //   <Container>
  //     <GlobalStyle/>
  //     <Button>Hello</Button>
  //     <Button danger rotationTime={5}>Bye</Button>
  //     <Anchor href="https://google.com">Go to google</Anchor>
  //   </Container>
    
  // );
}

const Container = styled.div`
  height:100vh;
  width:100%;
  background-color: #fed330;
`

// const Button = styled.button`
//   border-radius: 50px;
//   padding: 5px;
//   min-width: 120px;
//   color: white;
//   font-weight: 600;
//   appearance: none;
//   cursor: pointer;
//   &:active,
//   &:focus {
//     outline: none;
//   }
//   background-color: ${props => props.danger ? "#fc5c65" : "#26de81" };
//   ${props => {
//     if (props.danger) {
//       return css`animation: ${rotation} ${props.rotationTime}s linear infinite;`
//     }
//   }}
// `

// const Anchor = styled(Button.withComponent("a"))`
//   text-decoration:none;
// `

// const rotation = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `

export default App;
