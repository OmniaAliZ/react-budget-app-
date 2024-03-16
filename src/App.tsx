import { useState } from "react";
import { Expense } from "./Components/ExpenseWrapper";
import { Income } from "./Components/IncomeWrapper";
import SavingWrapper from "./Components/SavingWrapper";
import ListItems from "./Components/ListItems";
import { FormTabs } from "./Components/FormTabs";
import { ThemeProvider, Typography, createTheme } from "@mui/material";
import Progress from "./Components/Progress";
import { TabList } from "@mui/lab";
import ListTable from "./Components/ListTable";

const theme = createTheme({
  typography: {
    h4: {
      fontSize: 24,
      margin:"1%",
    },
  },
});

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]); 
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [savingsTarget, setSavingsTarget] = useState(0);
  const [currentSaving, setCurrentSaving] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const totalIncomes = incomes.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  let balance = (totalIncomes - totalExpenses - currentSaving) | 0;

  const handleTransferSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (transferAmount <= balance) {
      if(transferAmount>0){
      setCurrentSaving((prev) => prev + transferAmount); } else {
        alert("You can not add negative/zero savings!");
      }
      // setTransferAmount(0);
    } else {
      alert("You do not enough money!");
    }
  };
  const handleDeleteIncome = (id: number) => {
    const updated = incomes.filter((income) => {
      return income.id != id;
    });
    setIncomes(updated);
  };
  const handleDeleteExpense = (id: number) => {
    const updated = expenses.filter((expense) => {
      return expense.id != id;
    });
    setExpenses(updated);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header"></header>
        <h1>Budget Tracker</h1>
        {/* <div className="balance">
          <Typography variant="h4"> BALANCE : {balance} </Typography>
        </div> */}
        <div >
          <SavingWrapper
          balance={balance}
            savingsTarget={savingsTarget}
            currentSaving={currentSaving}
            setTransferAmount={setTransferAmount}
            setSavingsTarget={setSavingsTarget}
            handleTransferSubmit={handleTransferSubmit}
          />
        </div>

        <FormTabs
          incomes={incomes}
          setIncomes={setIncomes}
          expenses={expenses}
          setExpenses={setExpenses}
        />
        <h1>Budget Details : </h1>
        <div className="ListContainer">
          <ListItems items={incomes} handleDelete={handleDeleteIncome} />
          <ListItems items={expenses} handleDelete={handleDeleteExpense} />
    </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
