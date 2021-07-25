import { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonRadioType from "../components/Button/ButtonRadioType";
import InputField from "../components/InputField/InputField";
import Label from "../components/Label/Label";
import { DEFAULTS } from "../consts/styles";
import {
  salary2Change,
  salary2PeriodChange,
  salaryChange,
  salaryPeriodChange,
} from "../store/store";

const SalaryBlock: React.FC = () => {
  const [mode, setMode] = useState(1);
  const dispatch = useDispatch();

  return (
    <>
      <Label text="How many of you are buying the property?" />
      <span>
        <ButtonRadioType
          title="Just Me"
          name="radios1"
          onClick={() => {
            setMode(1);
            dispatch(salary2Change(0));
          }}
          checked
          style={{ marginRight: DEFAULTS.btnSpacing }}
        />
        <ButtonRadioType
          title="I'm buing with someone"
          name="radios1"
          onClick={() => {
            setMode(2);
            dispatch(salary2Change(0));
          }}
        />
      </span>
      <Label text="What's your base salary/wages? (before tax)" />
      <InputField
        onChange={(val) => dispatch(salaryChange(Number(val)))}
        onPeriodChange={(val) => dispatch(salaryPeriodChange(Number(val)))}
      />
      {mode === 2 && (
        <>
          <Label text="What's the second applicant's base salary/wages? (before tax)" />
          <InputField
            onChange={(val) => dispatch(salary2Change(Number(val)))}
            onPeriodChange={(val) => dispatch(salary2PeriodChange(Number(val)))}
          />
        </>
      )}
    </>
  );
};

export default SalaryBlock;
