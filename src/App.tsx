import React from 'react';
import {Container, Paper,Grid, styled} from "@mui/material"

const OutPutContainer = styled('div')(({theme})=> ({
  width: "90%", 
  textAlign: "right", 
  height: '2em', 
  padding: theme.spacing(2), 
  fontSize: "4em", 
  overflow: "hidden"

}))
const CalculatorBase = styled(Paper)(({theme}) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius : 15
}))
function App() {
  return (
  <Container maxWidth="lg">
     <CalculatorBase elevation={3}> 
<Grid container spacing={1}>
  <Grid item xs={11}>
    <OutPutContainer>0</OutPutContainer>
  </Grid>
  </Grid>
     </CalculatorBase>
     </Container>
  );
}

export default App;
