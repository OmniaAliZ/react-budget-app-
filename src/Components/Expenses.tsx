import { Buttons } from "./Buttons";
import { Input } from "./Input";

type ExpenseProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleChangeDate: React.ChangeEventHandler<HTMLInputElement>;
  handleExpenseSubmit: React.FormEventHandler<HTMLFormElement>;
};
export function Expenses({
  handleChange,
  handleChangeDate,
  handleExpenseSubmit,
}: ExpenseProps) {
  return (
    <div>
      <form onSubmit={handleExpenseSubmit}>
        <Input
          idNameHtmlFor="source"//"sourceExpenseInput"
          type="text"
          placeholder="Enter your source.."
          label="Enter Expense Source"
          handleChange={handleChange}
        />
        <Input
          idNameHtmlFor="amount"//"AmountExpenseInput"
          type="number"
          placeholder="Enter the amount.."
          label="Enter Amount of Expense"
          handleChange={handleChange}
        />
        <Input
          idNameHtmlFor="dateExpenseInput"
          type="Date"
          placeholder=""
          label="Enter Date"
          handleChange={handleChangeDate}
        />
        <Buttons label="Add expense" />
      </form>
    </div>
  );
}
