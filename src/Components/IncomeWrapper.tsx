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
    console.log("targrt",e.target);
    setIncome({ ...income, [name]: value});
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
    const newIncome = {
      source: income.source,
      amount: income.amount,
      date: income.date,
    };
    setIncomes([...incomes, newIncome]);

  };

  
  console.log("print value date ", income.date);
  console.log("print value amount ", income.amount);
  console.log("print value source ", income.source);
  
  console.log("print value date ", income);
  console.log("print value source ", incomes);

  return (
    <div>
      <Incomes
        handleChange={handleChange}
        handleIncomeSubmit={handleIncomeSubmit}
        handleChangeDate={handleChangeDate}
      />

      <ul>
        {incomes.map(income =>{return(
            <li>
              <p>
                {
                  income.source
                }
              </p>
              <p>
                {
                  income.amount
                }
              </p>
              <p>
                {
                  income.date
                }
              </p>
            </li>
          )})}
      </ul>
    </div>
    
  );
}
