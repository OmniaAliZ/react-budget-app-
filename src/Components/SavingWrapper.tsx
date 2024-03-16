import React, { useState } from "react";
import Saving from "./Saving";
import { Box, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import TransferAccount from "./TransferAccount";
import Progress from "./Progress";

type SavingWrapperProps = {
  balance: number;
  setSavingsTarget: (key: number) => void;
  setTransferAmount: (key: number) => void;
  handleTransferSubmit: (key: React.FormEvent<HTMLFormElement>) => void;
  currentSaving: number;
  savingsTarget: number;
};
export default function SavingWrapper({
  balance,
  setTransferAmount,
  setSavingsTarget,
  handleTransferSubmit,
  currentSaving,
  savingsTarget,
}: SavingWrapperProps) {
  const [target, setTarget] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setSavingsTarget(valueAsNumber);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(savingsTarget>0){
    setTarget(savingsTarget);
  } else {
    alert("You can not add negative/zero target!");
  }
    // setSavingsTarget(0)
  };
  const theme = createTheme({
    typography: {
      h6: {
        fontSize: 20,
        marginBottom: "3%",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="saving">
          <div className="saving-container">
            <div className="info">
              <Typography variant="h6"> BALANCE : {balance} </Typography>
              <Typography variant="h6">Target :{target} </Typography>
              <Typography variant="h6">
                Current Saving : {currentSaving}
              </Typography>
            </div>
          </div>
          <div className="saving-container inputs">
            <Saving handleChange={handleChange} handleSubmit={handleSubmit} />

            <TransferAccount
              setTransferAmount={setTransferAmount}
              handleSubmit={handleTransferSubmit}
            />
          </div>
          <div className="progress">
          <Progress
            currentSaving={currentSaving}
            savingsTarget={savingsTarget}
          />
        </div>
        </div>

      </ThemeProvider>
    </>
  );
}
