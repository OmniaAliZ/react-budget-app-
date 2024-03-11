import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Income, IncomeWrapper } from "./IncomeWrapper";
import { Expense, ExpenseWrapper } from "./ExpenseWrapper";
import { styled } from "@mui/material/styles";


// import { createTheme } from '@mui/material/styles';

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

const TabCustom = styled(Tab)({
  color: "#006466",
  
  // "&.Mui-selected": {
  //   color: "red",
    
  // },
});
type TabsProps = {
  incomes:Income[],
  expenses:Expense[],
  setIncomes:(key:Income[])=> void,
  setExpenses:(key:Expense[])=> void,
}

export default function Tabs({incomes,setIncomes,expenses,setExpenses}:TabsProps) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "subtitle2" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <ThemeProvider theme={theme}>
            <TabList indicatorColor="secondary" textColor="secondary" onChange={handleChange} aria-label="incomes and expenses tabs">
              <TabCustom label="Incomes" value="1" />
              <TabCustom label="Expenses" value="2" />
            </TabList>
            </ThemeProvider>
          </Box>
          <TabPanel value="1">
            <IncomeWrapper incomes={incomes} setIncomes={setIncomes} />
          </TabPanel>
          <TabPanel value="2">
            <ExpenseWrapper expenses={expenses} setExpenses={setExpenses} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
