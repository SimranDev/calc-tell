import { useDispatch } from "react-redux";
import DepositField from "../components/InputField/DepositField";
import Label from "../components/Label/Label";
import { depositChange } from "../store/store";

const DepositBlock: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Label text="How much deposite do you have?" />
      <span>
        <DepositField
          onChange={(val: string) => dispatch(depositChange(Number(val)))}
        />
      </span>
    </>
  );
};

export default DepositBlock;
