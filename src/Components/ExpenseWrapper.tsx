// move everything about income from app to here

// in app >>>> have wrappers only (better)

// i can use <>   </>    to wrap all in return (return only RETURN one element)
import React, { useState } from "react";

// import { Buttons } from "./Buttons";
import { Expenses } from "./Expenses";

type Expense = { source: string; amount: number; date: Date }; //  date :Date ××   date : string > to use toLocalDateString()

const handleExpenseSourceChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {};

const handleExpenseAmountChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {};

const handleExpenseDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

const handleExpenseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

export function ExpenseWrapper() {
  const [expenses, setExpenses] = useState<Expense[]>([]); // { source: "", amount: 12 , date: new Date().toLocalDateString(),} objects
  const [expense, setexpense] = useState({
    source: "",
    amount: 0,
     date: new Date().toLocaleDateString(),
  });

  return (
    <Expenses
      handleExpenseSourceChange={handleExpenseSourceChange}
      handleExpenseAmountChange={handleExpenseAmountChange}
      handleExpenseDateChange={handleExpenseDateChange}
      handleExpenseSubmit={handleExpenseSubmit}
    />
  );
}
