import { Buttons } from "./Buttons";
import { Input } from "./Input";

type IncomesProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleIncomeSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChangeDate: React.ChangeEventHandler<HTMLInputElement>;
};
export function Incomes({
  handleChange,
  handleIncomeSubmit,
  handleChangeDate,
}: IncomesProps) {
  return (
    <div>
      <form onSubmit={handleIncomeSubmit}>
        <Input
          idNameHtmlFor="source"//"sourceIncomeInput"
          type="text"
          placeholder="Enter your source.."
          label="Enter Income Source"
          handleChange={handleChange}
        />
        <Input
          idNameHtmlFor="amount"//"AmountIncomeInput"
          type="number"
          placeholder="Enter the amount.."
          label="Enter Amount of Income"
          handleChange={handleChange}
        />
        <Input
          idNameHtmlFor="dateIncomeInput"
          type="date"
          placeholder=""
          label="Enter Date"
          handleChange={handleChangeDate}
        />
        <Buttons label="Add income" />
      </form>
    </div>
  );
}
