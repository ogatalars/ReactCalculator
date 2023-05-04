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

  const selectOperation = (operation: string) => {
    setOperation(operation);
  };

  const setDigit = (digit: string) => {
    setCurrentValue(digit);
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
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
            <DigitalOperationalButton
              operational={"C"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
            <DigitalOperationalButton
              operational={"%"}
              selectOperation={selectOperation}
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
                <Grid item xs={6}>
                  <Button fullWidth variant="contained">
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
