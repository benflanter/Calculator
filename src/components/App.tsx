import { Container, Grid } from "@mui/material";
import CalcuctorBase from "./CalculatorBase";
import OutputContainer from "./OutputContainer";

function App() {
  return (
    <Container maxWidth="sm">
      <CalcuctorBase elevation={3}>
        <Grid item xs={12}>
          <OutputContainer>0</OutputContainer>
        </Grid>
      </CalcuctorBase>
    </Container>
  );
}

export default App;
