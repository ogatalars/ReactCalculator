import { useState } from 'react';
import { Container, Paper, Grid, styled, Button } from "@mui/material";
import { DigitalOperationalButton } from './DigitalOperationalButton';
import { DigitalButton } from './DigitalButton';

const OutPutContainer = styled('div')(({ theme }) => ({
  width: "90%",
  textAlign: "right",
  height: '2em',
  padding: theme.spacing(2),
  fontSize: "4em",
  overflow: "hidden"
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15
}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setprevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const calculate = () => {
    if(!prevValue || !operation) return currentValue;
    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;
    switch(operation) {
      case "/": 
      result = prev / curr;
      break;
      case "*": 
      result = prev * curr;
      break;
      case "-": 
      result = prev - curr;
      break;
      case "+": 
      result = prev + curr;
      break;
    } 
    return result 
  }

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setprevValue("");
    setOperation("");
    setOverwrite(true)
  }

  const clear = () => {
    setprevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true)
  }

  const del = () => {
    setCurrentValue("0");
    setOverwrite(true)

  }

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  }


  
  const selectOperation = (operation: string) => {
    if(prevValue){
      const val = calculate();
      setCurrentValue(`${val}`);
      setprevValue(`${val}`)
    } else {
      setprevValue(currentValue)
    }
    setprevValue(currentValue)
    setOperation(operation);
    setOverwrite(true)
  };

  const setDigit = (digit: string) => {
    if(currentValue[0] === "0" && digit === "0") return;
    if(currentValue.includes(".") && digit === ".") return;
    if(overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else(setCurrentValue(`${currentValue}${digit}`))
    ;
    setOverwrite(false)
  };

  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={11}>
            <OutPutContainer>{currentValue}</OutPutContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <DigitalOperationalButton
              operational={"AC"}
              selectOperation={clear}
              selectedOperation={operation}
            />
            <DigitalOperationalButton
              operational={"C"}
              selectOperation={del}
              selectedOperation={operation}
            />
            <DigitalOperationalButton
              operational={"%"}
              selectOperation={percent}
              selectedOperation={operation}
            />
            <DigitalOperationalButton
              operational={"/"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
            <Grid item container columnSpacing={1}>
              <DigitalButton digit={"7"} enterDigit={setDigit} />
              <DigitalButton digit={"8"} enterDigit={setDigit} />
              <DigitalButton digit={"9"} enterDigit={setDigit} />

              <DigitalOperationalButton
                operational={"*"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <DigitalButton digit={"4"} enterDigit={setDigit} />
              <DigitalButton digit={"5"} enterDigit={setDigit} />
              <DigitalButton digit={"6"} enterDigit={setDigit} />

              <DigitalOperationalButton
                operational={"-"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <DigitalButton digit={"3"} enterDigit={setDigit} />
              <DigitalButton digit={"2"} enterDigit={setDigit} />
              <DigitalButton digit={"1"} enterDigit={setDigit} />

              <DigitalOperationalButton
                operational={"+"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
              <Grid item container columnSpacing={1}>
                <DigitalButton digit={"0"} enterDigit={setDigit} xs={6} />
                <DigitalButton digit={"."} enterDigit={setDigit} />
                <Grid item xs={2}>
                  <Button fullWidth variant="contained" onClick={equals}>
                    =
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
