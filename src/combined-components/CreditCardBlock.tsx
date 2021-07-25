import { useDispatch, useSelector } from "react-redux";
import AddButton from "../components/Button/AddButton";
import ButtonRadioType from "../components/Button/ButtonRadioType";
import LoanField from "../components/InputField/LoanField";
import Label from "../components/Label/Label";
import { DEFAULTS } from "../consts/styles";
import {
  addCredit,
  creditChange,
  deleteAllCredit,
  deleteCredit,
  RootState,
} from "../store/store";

const CreditCardBlock: React.FC = () => {
  const dispatch = useDispatch();
  const { credit_list } = useSelector((state: RootState) => state.counter);
  return (
    <>
      <Label text="Do you have any credit cards?" />
      <span>
        <ButtonRadioType
          title="  Yes  "
          name="radios4"
          onClick={() => {
            dispatch(addCredit());
          }}
          style={{ marginRight: DEFAULTS.btnSpacing }}
        />
        <ButtonRadioType
          title="  No  "
          name="radios4"
          onClick={() => {
            dispatch(deleteAllCredit());
          }}
          checked
        />
      </span>
      {credit_list.map((row, index) => (
        <div key={index}>
          <Label text={"Credit #" + (index + 1)} />
          <span>
            <LoanField
              onChange={(value: string) =>
                dispatch(creditChange({ index, value: Number(value) }))
              }
              onDelete={() => dispatch(deleteCredit(index))}
            />
          </span>
        </div>
      ))}
      {credit_list.length > 0 && (
        <AddButton
          title="Add credit card"
          onClick={() => dispatch(addCredit())}
          style={{ marginTop: "10px" }}
        ></AddButton>
      )}
    </>
  );
};

export default CreditCardBlock;
