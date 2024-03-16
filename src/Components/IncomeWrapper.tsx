// move everything about income from app to here

// in app >>>> have wrappers only (better)

// i can use <>   </>    to wrap all in return (return only RETURN one element)
import React, { useState } from "react";
// import { Buttons } from "./Buttons";
import { Form } from "./Form";
// import { log } from "console";

export type Income = {
  type:string;
  id: number;
  source: string;
  amount: number;
  date: null | string;
}; //  date :Date ××   date : string > to use toLocalDateString()

type IncomeWrapperProps = {
  incomes: Income[];
  setIncomes: (key: Income[]) => void;
};
export function IncomeWrapper({ incomes, setIncomes }: IncomeWrapperProps) {
  const [income, setIncome] = useState<Income>({
    type:"",
    id: +new Date(),
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

  const handleIncomeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Number(income.amount)>0){
    const newIncome = {
      type:"income",
      id: +new Date(),
      source: income.source,
      amount: Number(income.amount),
      date: income.date,
    };
    setIncomes([...incomes, newIncome]);}
    else{
      alert("You can not add zero/negative amount!");
    }
  };

  return (
    <div className="wrapper">
      <Form
        handleChange={handleChange}
        handleSubmit={handleIncomeSubmit}
        handleChangeDate={handleChangeDate}
      />
    </div>
  );
}
