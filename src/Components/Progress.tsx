import {
  Box,
  LinearProgress,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  typography: {
    h6: {
      fontSize: 20,
      marginBottom: "3%",
    },
  },
});
const ALinearProgress = styled(LinearProgress)({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#686D8E", //theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#22223B" : "#686D8E",
  },
});
type ProgressProps = {
  currentSaving: number;
  savingsTarget: number;
};
export default function Progress({
  currentSaving,
  savingsTarget,
}: ProgressProps) {
  const progress = ((currentSaving / savingsTarget) * 100) | 0;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h6">Progress : {progress} %</Typography>
        <Box sx={{ width: "35rem", marginBottom:"2%" }}>
          <ALinearProgress
            color="primary"
            variant="determinate"
            value={progress}
          />
        </Box>
      </ThemeProvider>
    </div>
  );
}
