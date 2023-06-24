export interface IcheckBoxContiner {
  label?: string;
}
export interface IcheckBox {
  label?: string;
  checked: boolean;
  onChange: (newValue: boolean) => void;
}
