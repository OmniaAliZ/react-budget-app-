
import { ExpenseWrapper } from "./Components/ExpenseWrapper";
import { IncomeWrapper } from "./Components/IncomeWrapper";
import SavingWrapper from "./Components/SavingWrapper";

import logo from "./logo.svg";


function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Budget Tracker</h1>
      <h2>Incomes</h2>
      <IncomeWrapper/>
      <h2>Expenses</h2>
      <ExpenseWrapper/>
      <h2>Saving</h2>
      <SavingWrapper/>
    </div>
  );
}

export default App;
