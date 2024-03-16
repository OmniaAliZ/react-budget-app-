import React, { createContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Expense } from "./ExpenseWrapper";
import { Income } from "./IncomeWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/budget-app",
    element: <App />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
