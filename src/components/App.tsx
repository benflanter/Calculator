import { Button, Container, Grid } from "@mui/material";
import CalcuctorBase from "./CalculatorBase";
import OutputContainer from "./OutputContainer";
import { useState } from "react";
import OpertionButton from "./OperationButton";
import DigitButton from "./DigitButton";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");

  const setDigit = (digit: string) => {
    setCurrentValue(digit);
  };

  const selectOperation = (operation: string) => {
    setOperation(operation);
  };

  return (
    <Container maxWidth="sm">
      <CalcuctorBase elevation={3}>
        <Grid item xs={12}>
          <OutputContainer>{currentValue}</OutputContainer>
        </Grid>
        <Grid item container columnSpacing={1}>
          <OpertionButton
            operation={"AC"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
          <OpertionButton
            operation={"C"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
          <OpertionButton
            operation={"%"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
          <OpertionButton
            operation={"%"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton digit={"7"} enterDigit={setDigit} />
          <DigitButton digit={"8"} enterDigit={setDigit} />
          <DigitButton digit={"9"} enterDigit={setDigit} />
          <OpertionButton
            operation={"*"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton digit={"4"} enterDigit={setDigit} />
          <DigitButton digit={"5"} enterDigit={setDigit} />
          <DigitButton digit={"6"} enterDigit={setDigit} />
          <OpertionButton
            operation={"-"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton digit={"1"} enterDigit={setDigit} />
          <DigitButton digit={"2"} enterDigit={setDigit} />
          <DigitButton digit={"3"} enterDigit={setDigit} />
          <OpertionButton
            operation={"+"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton digit={"0"} enterDigit={setDigit} xs={6} />
          <DigitButton digit={"."} enterDigit={setDigit} />
          <Grid item xs={3}>
            <Button fullWidth variant="contained">
              =
            </Button>
          </Grid>
        </Grid>
      </CalcuctorBase>
    </Container>
  );
}

export default App;
