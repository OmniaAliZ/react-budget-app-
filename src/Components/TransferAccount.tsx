import React from 'react'
import { Input } from './Input'
import { Buttons } from './Buttons'


type TransferAccountProps={
  // handleChange: React.ChangeEventHandler<HTMLInputElement| HTMLTextAreaElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  setTransferAmount:(key:number)=>void;
  // transferAmount:number;
}

export default function TransferAccount({
    // handleChange,
    handleSubmit,setTransferAmount,
    // transferAmount
  }:TransferAccountProps) {


      const handleTransferChange :React.ChangeEventHandler<HTMLInputElement| HTMLTextAreaElement> 
      = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {valueAsNumber} =e.target
        setTransferAmount(valueAsNumber) 
      };

    return (
      <div>
        <form className="saving-inputs" onSubmit={handleSubmit}>
        <Input idNameHtmlFor="transfer"
              type="number"
              placeholder="..."
              label="Transfer to saving account "
              // value={transferAmount}
              handleChange={handleTransferChange}/>
            <Buttons label="Transfer" />
        </form>
      </div>
  
    )
  }
  