import React from 'react'
import { Input } from './Input'
import { Buttons } from './Buttons';

// rfc for auto

  type SavingProps = {
    handleChange: (event: React.ChangeEvent) => void;
    handleSavingSubmit: (event: React.FormEvent) => void;
    };

    // type SavingProps = {
    //   handleChange: React.ChangeEventHandler<HTMLInputElement>;
    //   handleSavingSubmit: React.FormEventHandler<HTMLFormElement>;}


export default function Saving({
  handleChange,
  handleSavingSubmit,}:SavingProps) {
  return (
    <div>
      <form onSubmit={handleSavingSubmit}>
      <Input idNameHtmlFor="setTargetInput"
            type="number"
            placeholder="Set your target.."
            label="Set Target"
            handleChange={handleChange}/>
          <Buttons label="Reset" />
      </form>

      <span>
        Current Saving : 
      </span>
      <span>
        Target : 
      </span>
      <span>
        Progress : 
      </span>
    </div>

  )
}
