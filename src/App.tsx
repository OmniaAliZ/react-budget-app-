import { useState } from "react";
import { Expense, ExpenseWrapper } from "./Components/ExpenseWrapper";
import { Income, IncomeWrapper } from "./Components/IncomeWrapper";
import SavingWrapper from "./Components/SavingWrapper";
import Tabs from "./Components/Tabs";

import logo from "./logo.svg";
import ListItems from "./Components/ListItems";

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]); // { source: "", amount: 12 , date: new Date().toLocalDateString(),} objects
  const [expenses, setExpenses] = useState<Expense[]>([]); // { source: "", amount: 12 , date:""// new Date().toLocalDateString(),} objects
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Budget Tracker</h1>
      <Tabs
        incomes={incomes}
        setIncomes={setIncomes}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <h1>List</h1>
      <div className="ListContainer">
        <ListItems items={incomes} />
        <ListItems items={expenses} />
      </div>
      <h2>Saving</h2>
      <SavingWrapper />
    </div>
  );
}

export default App;
