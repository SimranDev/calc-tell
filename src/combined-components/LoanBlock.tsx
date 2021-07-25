import { useDispatch, useSelector } from "react-redux";
import AddButton from "../components/Button/AddButton";
import ButtonRadioType from "../components/Button/ButtonRadioType";
import LoanField from "../components/InputField/LoanField";
import Label from "../components/Label/Label";
import { DEFAULTS } from "../consts/styles";
import {
  addLoan,
  deleteAllLoan,
  deleteLoan,
  loanChange,
  RootState,
} from "../store/store";

const LoanBlock: React.FC = () => {
  const dispatch = useDispatch();
  const { loan_list } = useSelector((state: RootState) => state.counter);
  return (
    <>
      <Label text="Do you have any loans?" />
      <span>
        <ButtonRadioType
          title=" Yes "
          name="radios3"
          onClick={() => {
            console.log("addLoan");
            dispatch(addLoan());
          }}
          style={{ marginRight: DEFAULTS.btnSpacing }}
        />
        <ButtonRadioType
          title=" No "
          name="radios3"
          onClick={() => {
            dispatch(deleteAllLoan());
          }}
          checked
        />
      </span>
      {loan_list.map((row, index) => (
        <div key={index}>
          <Label text={"Loan #" + (index + 1)} />
          <span>
            <LoanField
              onChange={(value: string) =>
                dispatch(loanChange({ index, value: Number(value) }))
              }
              onDelete={() => dispatch(deleteLoan(index))}
            />
          </span>
        </div>
      ))}
      {loan_list.length > 0 && (
        <AddButton
          title="Add loan"
          onClick={() => dispatch(addLoan())}
          style={{ marginTop: "10px" }}
        ></AddButton>
      )}
    </>
  );
};

export default LoanBlock;
