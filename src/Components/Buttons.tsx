import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

type ButtonProps = {
  label: string;
};

const Buttond = styled(Button)({
  backgroundColor: "#212F45",
  padding: "auto",
  color:"#9A8C98",
  "&:hover": {
    backgroundColor: "#272640",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#654C6C",
    borderColor: "#005cbf",
  },
  //   '&:focus': {
  //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  //   },
});

export function Buttons({ label }: ButtonProps) {
  // return <button>{label}</button>//use passing
  return (
    <Buttond variant="contained" endIcon={<SendIcon />} type="submit">
      {label}
    </Buttond>
  );
  //   return <Button variant="contained">Hello world</Button>;
}
