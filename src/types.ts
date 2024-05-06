export interface DigitButtonProps {
  digit: string;
  enterDigit: (digit: string) => void;
  xs?: number;
}

export interface OperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}
