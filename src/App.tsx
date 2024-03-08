
import { ExpenseWrapper } from "./Components/ExpenseWrapper";
import { IncomeWrapper } from "./Components/IncomeWrapper";
import logo from "./logo.svg";
// import "./App.css";
// import "./Incomes";
// import "./Expenses";
// import "./Saving";
// import "./Components/Button";


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
    </div>
  );
}

export default App;
