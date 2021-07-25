import { useDispatch, useSelector } from "react-redux";
import AddButton from "../components/Button/AddButton";
import ButtonRadioType from "../components/Button/ButtonRadioType";
import OtherField from "../components/InputField/OtherIncomeField";
import Label from "../components/Label/Label";
import { DEFAULTS } from "../consts/styles";
import {
  addOtherIncome,
  deleteAllOtherIncome,
  deleteOtherIncome,
  otherIncomeChange,
  otherIncomePeriodChange,
  RootState,
} from "../store/store";

const IncomeBlock: React.FC = () => {
  const dispatch = useDispatch();

  const { other_income_list } = useSelector(
    (state: RootState) => state.counter
  );
  return (
    <>
      <Label text="Do you have another source of income?" />
      <span>
        <ButtonRadioType
          title="Yes"
          name="radios2"
          onClick={() => {
            dispatch(addOtherIncome());
          }}
          style={{ marginRight: DEFAULTS.btnSpacing }}
        />
        <ButtonRadioType
          title="No"
          name="radios2"
          onClick={() => {
            dispatch(deleteAllOtherIncome());
          }}
          checked
        />
      </span>
      {other_income_list.map((row, index) => (
        <div key={index}>
          <Label text={"Other income #" + (index + 1)} />
          <span>
            <OtherField
              onChange={(value: string) =>
                dispatch(otherIncomeChange({ index, value: Number(value) }))
              }
              onPeriodChange={(value: number) =>
                dispatch(
                  otherIncomePeriodChange({ index, value: Number(value) })
                )
              }
              onDelete={() => dispatch(deleteOtherIncome(index))}
            />
          </span>
        </div>
      ))}
      {other_income_list.length > 0 && (
        <AddButton
          title="Add other income"
          onClick={() => dispatch(addOtherIncome())}
          style={{ marginTop: "10px" }}
        ></AddButton>
      )}
    </>
  );
};

export default IncomeBlock;
