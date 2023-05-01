import {useState} from 'react';
import {Container, Paper,Grid, styled} from "@mui/material"
import { DigitalOperationalButton } from './DigitalOperationalButton';

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
  const [currentValue, setCurrentValue] = useState("0")
  const [operation, setOperation] = useState("")
  const selectOperation = (operation:string) => {
  setOperation(operation)
  }

  const setDigit  = (digit: string) => {
    setCurrentValue(digit)
  }

  return (
  <Container maxWidth="lg">
     <CalculatorBase elevation={3}> 
<Grid container spacing={1}>
  <Grid item xs={11}>
    <OutPutContainer>{currentValue}</OutPutContainer>
  </Grid>
  <Grid  item container columnSpacing={1}>
  <DigitalOperationalButton 
  operational={"AC"}
  selectOperation={selectOperation}
  selectedOperation={operation}
  />
  </Grid>
  </Grid>
     </CalculatorBase>
     </Container>
  );
}

export default App;
