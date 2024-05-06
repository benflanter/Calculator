import { Button, Grid } from "@mui/material";
import { DigitButtonProps } from "../types";

const DigitButton: React.FC<DigitButtonProps> = ({
  digit,
  enterDigit,
  xs = 3,
}) => {
  return (
    <Grid item xs={xs}>
      <Button fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};

export default DigitButton;
