// move everything about income from app to here

// in app >>>> have wrappers only (better)

// i can use <>   </>    to wrap all in return (return only RETURN one element)
import React, { useState } from "react";

// import { Buttons } from "./Buttons";
import { Incomes } from "./Incomes";
// import { log } from "console";

type Income = { source: string; amount: number; date: null | string }; //  date :Date ××   date : string > to use toLocalDateString()

export function IncomeWrapper() {
  const [incomes, setIncomes] = useState<Income[]>([]); // { source: "", amount: 12 , date: new Date().toLocalDateString(),} objects
  const [income, setIncome] = useState<Income>({
    source: "",
    amount: 0, // Yazan : amount:''
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIncome({ ...income, [name]: value });
  };

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    // handleChange always give parameter: event
    // based on event, you can get the value

    const value = event.target.value;
    if (value) {
      setIncome({
        ...income,
        date: value,
      });
    }
  };

  console.log("print value date ", income.date);
  console.log("print value amount ", income.amount);
  console.log("print value income ", income.source);
  
  console.log("print value income ", income);

  const handleIncomeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newIncome = {
      source: income.source,
      amount: income.amount,
      date: income.date,
    };
    setIncomes([...incomes, newIncome]);

  };

  return (
    <Incomes
      handleChange={handleChange}
      handleIncomeSubmit={handleIncomeSubmit}
      handleChangeDate={handleChangeDate}
    />
  );
}
