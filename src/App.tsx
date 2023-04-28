import React from 'react';
import {Container, Paper, styled} from "@mui/material"

const CalculatorBase = styled(Paper)(({theme}) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius : 15
}))
function App() {
  return (
  <Container maxWidth="lg">
     <CalculatorBase elevation={3}> 
Teste
     </CalculatorBase>
     </Container>
  );
}

export default App;
