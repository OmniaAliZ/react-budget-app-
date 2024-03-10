// move everything about income from app to here

// in app >>>> have wrappers only (better)

// i can use <>   </>    to wrap all in return (return only RETURN one element)
import React, { useState } from "react";

// import { Buttons } from "./Buttons";
import { Expenses } from "./Expenses";

type Expense = { source: string; amount: number; date: string }; //  date :Date ××   date : string > to use toLocalDateString()

export function ExpenseWrapper() {
  const [expenses, setExpenses] = useState<Expense[]>([]); // { source: "", amount: 12 , date:""// new Date().toLocalDateString(),} objects
  const [expense, setExpense] = useState({
    source: "",
    amount: 0,
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("targrt", e.target);
    setExpense({ ...expense, [name]: value });
  };

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value) {
      setExpense({
        ...expense,
        date: value,
      });
    }
  };

  const handleExpenseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExpense = {
      source: expense.source,
      amount: expense.amount,
      date: expense.date,
    };
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <Expenses
        handleChange={handleChange}
        handleChangeDate={handleChangeDate}
        handleExpenseSubmit={handleExpenseSubmit}
      />

<ul>
        {expenses.map(expense =>{return(
            <li>
              <p>
                {
                  expense.source
                }
              </p>
              <p>
                {
                  expense.amount
                }
              </p>
              <p>
                {
                  expense.date
                }
              </p>
            </li>
          )})}
      </ul>
    </div>
  );
}
