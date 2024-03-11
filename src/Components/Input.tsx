import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";



import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#283593',
    },
    secondary: {
      main: '#ffff',
    },
  },
});

type InputProps = {
  idNameHtmlFor: string;
  type: string;
  placeholder: string;
  label: string;
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
  handleChange,
}: InputProps) {
  if (type == "text") {
    return (
      <ThemeProvider theme={theme}>
      <TextField
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
      <TextField
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
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="standard"
      /></ThemeProvider>
    );
  }
  if (type == "date") {
    return (
      
      <ThemeProvider theme={theme}>
      <TextField
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
