import React from 'react'
import { Input } from './Input'
import { Buttons } from './Buttons';

// rfc for auto

  type SavingProps = {
    // handleChange: (event: React.ChangeEvent) => void;
    // handleSubmit: (event: React.FormEvent) => void;
  handleChange: React.ChangeEventHandler<HTMLInputElement| HTMLTextAreaElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
    };


export default function Saving({
  handleChange,
  handleSubmit,}:SavingProps) {
  return (
    <div>
      <form className="saving-inputs" onSubmit={handleSubmit}>
      <Input idNameHtmlFor="target"
            type="number"
            placeholder="..."
            label="Set Target  "
            handleChange={handleChange}/>
          <Buttons label="Reset" />
      </form>
    </div>

  )
}
