import { Grid } from "@mui/material";
import { OperationButtonProps } from "../types";
import StyledButton from "./StyledButton";

const OpertionButton: React.FC<OperationButtonProps> = ({
  operation,
  selectOperation,
  selectedOperation,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};

export default OpertionButton;
