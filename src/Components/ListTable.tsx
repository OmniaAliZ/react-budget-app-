import React, { useState } from 'react'
import { Income } from "./IncomeWrapper";
import { Expense } from "./ExpenseWrapper";

type ListTableProps = {
    incomes:Income[],
    expenses:Expense[],
    handleDeleteExpense:(id: number) => void,
    handleDeleteIncome:(id: number) => void,
}
export default function ListTable({incomes,expenses,handleDeleteExpense,handleDeleteIncome}:ListTableProps) {
    const [budget, setBudget] = useState({}) 

  return (
    <div>ListTable</div>
  )
}
