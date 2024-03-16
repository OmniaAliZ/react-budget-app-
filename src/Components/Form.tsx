import { Buttons } from "./Buttons";
import { Input } from "./Input";

type IncomesProps = {
  handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChangeDate: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
};
export function Form({
  handleChange,
  handleSubmit,
  handleChangeDate,
}: IncomesProps) {
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          idNameHtmlFor="source" //"sourceIncomeInput"
          type="text"
          placeholder="....."
          label="Enter Source  "
          handleChange={handleChange}
        />
        <Input
          idNameHtmlFor="amount" //"AmountIncomeInput"
          type="number"
          placeholder="....."
          label="Enter Amount  "
          handleChange={handleChange}
        />
        <Input
          idNameHtmlFor="dateIncomeInput"
          type="date"
          placeholder=""
          label="Enter Date  "
          handleChange={handleChangeDate}
        />
        <Buttons label=" Add " />
      </form>
    </div>
  );
}
