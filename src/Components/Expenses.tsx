import { Buttons } from "./Buttons";
import { Input } from "./Input";

type ExpenseProps = {
  handleExpenseSourceChange: React.ChangeEventHandler<HTMLInputElement>;
  handleExpenseAmountChange: React.ChangeEventHandler<HTMLInputElement>;
  handleExpenseDateChange: React.ChangeEventHandler<HTMLInputElement>;
  handleExpenseSubmit: React.FormEventHandler<HTMLFormElement>;
};
export function Expenses({
  handleExpenseSourceChange,
  handleExpenseAmountChange,
  handleExpenseDateChange,
  handleExpenseSubmit,
}: ExpenseProps) {
  return (
    <div>
      <form onSubmit={handleExpenseSubmit}>
        <Input
          idNameHtmlFor="sourceExpenseInput"
          type="text"
          placeholder="Enter your source.."
          label="Enter Expense Source"
          handleChange={handleExpenseSourceChange}
        />
        <Input
          idNameHtmlFor="AmountExpenseInput"
          type="number"
          placeholder="Enter the amount.."
          label="Enter Amount of Expense"
          handleChange={handleExpenseAmountChange}
        />
        <Input
          idNameHtmlFor="dateExpenseInput"
          type="Date"
          placeholder=""
          label="Enter Date"
          handleChange={handleExpenseDateChange}
        />
        <Buttons label="Add expense" />
      </form>
    </div>
  );
}
