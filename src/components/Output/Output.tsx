import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import OutputItem from "./OutputItem";

export interface OutputProps {}

const Output: React.FC<OutputProps> = () => {
  const { borrow, income, loan, deposit, credit } = useSelector(
    (state: RootState) => state.counter
  );

  return (
    <Container>
      <OutputItem label="Here's what you can borrow" dollars={borrow} />

      {deposit > 0 && (
        <OutputItem
          label={`With your deposit of $${deposit} you could afford a property up to`}
          dollars={borrow + deposit}
        />
      )}

      <OutputItem label="Total income" dollars={income} />

      {loan > 0 && <OutputItem label="Total loans" dollars={loan} />}

      {credit > 0 && <OutputItem label="Total credit cards" dollars={credit} />}
    </Container>
  );
};

export default Output;

const Container = styled.div`
  background-color: #dcdcdc;
  padding: 20px;
  border-radius: 10px;
`;
