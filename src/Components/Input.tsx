import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { styled } from '@mui/material/styles';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff',
    },
    secondary: {
      main: '#F2E9E4',
    },
  },
});

 
const InputTextField = styled(TextField)({
  
  margin: "0px 35px",
  "& .MuiInputLabel-root": {
    color: "#C9ADA7",
    fontWeight: 500,
  },
      input: {
        color: "#4A4E69",
      },
})

type InputProps = {
  idNameHtmlFor: string;
  type: string;
  placeholder: string;
  label: string;
  value?:number|string
  // handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export function Input({
  idNameHtmlFor,
  type,
  placeholder,
  label,
  value,
  handleChange,
}: InputProps) {
  if (type == "text") {
    return (
      <ThemeProvider theme={theme}>
      <InputTextField
        className="input"
        id={idNameHtmlFor}
        label={label}
        type={type}
        name={idNameHtmlFor}
        placeholder={placeholder}
        onChange={handleChange}
        required
        color="secondary" 
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        variant="standard"
      /></ThemeProvider>
    );
  }
  if (type == "number") {
    return (
      
      <ThemeProvider theme={theme}>
      <InputTextField
        className="input"
        id={idNameHtmlFor}
        label={label}
        type={type}
        value={value}
        name={idNameHtmlFor}
        placeholder={placeholder}
        onChange={handleChange}
        required
        color="secondary" 
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="standard"
      /></ThemeProvider>
    );
  }
  if (type == "date") {
    return (
      
      <ThemeProvider theme={theme}>
      <InputTextField
        className="input"
        id={idNameHtmlFor}
        label={label}
        type={type}
        name={idNameHtmlFor}
        placeholder={placeholder}
        onChange={handleChange}
        required
        color="secondary" 
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        variant="standard"
      /></ThemeProvider>
    );
  }
}
