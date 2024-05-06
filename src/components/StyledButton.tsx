import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "rgb(254,241,73,0.1)",
  borderColor: props.selected ? "#fff" : "rgb(254,241,73,0.5)",
}));

export default StyledButton;
