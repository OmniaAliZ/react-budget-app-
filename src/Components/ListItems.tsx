import React from "react";
import { Income } from "./IncomeWrapper";
import { Expense } from "./ExpenseWrapper";

type ListItemsProps = {
  items: Expense[] | Income[];
};

export default function ListItems({ items }: ListItemsProps) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.source}</p>
            <p>{item.amount}</p>
            <p>{item.date}</p>
          </li>
        );
      })}
    </ul>
  );
}
