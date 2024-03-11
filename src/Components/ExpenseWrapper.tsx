// i can use <>   </>    to wrap all in return (return only RETURN one element)
import React, { useState } from "react";
import { Form } from "./Form";
import { List, ListItem } from "@mui/material";
import ListItems from "./ListItems";

export type Expense = {
  id: number;
  source: string;
  amount: number;
  date: string;
}; //  date :Date ××   date : string > to use toLocalDateString()

type ExpenseWrapperProps = {
  expenses: Expense[];
  setExpenses: (key: Expense[]) => void;
};

export function ExpenseWrapper({ expenses, setExpenses }: ExpenseWrapperProps) {
  const [expense, setExpense] = useState({
    id: +new Date(),
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
      id: +new Date(),
      source: expense.source,
      amount: expense.amount,
      date: expense.date,
    };
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <Form
        handleChange={handleChange}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleExpenseSubmit}
      />
    </div>
  );
}
