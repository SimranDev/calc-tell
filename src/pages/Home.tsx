import { FC, useState } from "react";
import Button from "../components/Button/Button";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Label from "../components/Label/Label";
import InputField from "../components/InputField/InputField";
import Output from "../components/Output/Output";
import { useDispatch, useSelector } from "react-redux";
import {
  salaryChange,
  salary2Change,
  salaryPeriodChange,
  salary2PeriodChange,
  otherIncomeChange,
  otherIncomePeriodChange,
  addOther,
  deleteOther,
  deleteAllOther,
  addLoan,
  loanChange,
  deleteLoan,
  deleteAllLoan,
  depositChange,
  addCredit,
  deleteCredit,
  deleteAllCredit,
  creditChange,
} from "../store/store";
import { RootState } from "../store/store";
import OtherField from "../components/InputField/OtherField";
import LoanField from "../components/InputField/LoanField";
import DepositField from "../components/InputField/DepositField";
import { DEFAULTS } from "../consts/styles";

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const { other_list, loan_list, credit_list } = useSelector(
    (state: RootState) => state.counter
  );

  const [mode, setMode] = useState(1);

  return (
    <Container>
      <Content>
        <Header />
        <section>
          <FormContainer>
            {/* ------Home many buyying------ */}
            <Label text="How many of you are buying the property?" />
            <span>
              <Button
                title="Just Me"
                name="radios1"
                onClick={() => {
                  setMode(1);
                  dispatch(salary2Change(0));
                }}
                checked
                style={{ marginRight: DEFAULTS.btnSpacing }}
              />
              <Button
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
              onPeriodChange={(val) =>
                dispatch(salaryPeriodChange(Number(val)))
              }
            />
            {mode === 2 && (
              <>
                <Label text="What's the second applicant's base salary/wages? (before tax)" />
                <InputField
                  onChange={(val) => dispatch(salary2Change(Number(val)))}
                  onPeriodChange={(val) =>
                    dispatch(salary2PeriodChange(Number(val)))
                  }
                />
              </>
            )}

            {/* ------Another source of income------ */}
            <Label text="Do you have another source of income?" />
            <span>
              <Button
                title="Yes"
                name="radios2"
                onClick={() => {
                  dispatch(addOther());
                }}
                style={{ marginRight: DEFAULTS.btnSpacing }}
              />
              <Button
                title="No"
                name="radios2"
                onClick={() => {
                  dispatch(deleteAllOther());
                }}
                checked
              />
            </span>
            {other_list.map((row, index) => (
              <div key={index}>
                <Label text={"Other income #" + (index + 1)} />
                <span>
                  <OtherField
                    onChange={(value: string) =>
                      dispatch(
                        otherIncomeChange({ index, value: Number(value) })
                      )
                    }
                    onPeriodChange={(value: number) =>
                      dispatch(
                        otherIncomePeriodChange({ index, value: Number(value) })
                      )
                    }
                    onDelete={() => dispatch(deleteOther(index))}
                  />
                </span>
              </div>
            ))}
            {other_list.length > 0 && (
              <button
                style={{ width: 200, marginTop: 5 }}
                onClick={() => dispatch(addOther())}
              >
                Add Other Income
              </button>
            )}

            {/* ------Any loans------ */}
            <Label text="Do you have any loans?" />
            <span>
              <Button
                title=" Yes "
                name="radios3"
                onClick={() => {
                  console.log("addLoan");
                  dispatch(addLoan());
                }}
                style={{ marginRight: DEFAULTS.btnSpacing }}
              />
              <Button
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
              <button
                style={{ width: 200, marginTop: 5 }}
                onClick={() => dispatch(addLoan())}
              >
                Add Loan
              </button>
            )}

            {/* ------Any credit card------ */}
            <Label text="Do you have any credit cards?" />
            <span>
              <Button
                title="  Yes  "
                name="radios4"
                onClick={() => {
                  dispatch(addCredit());
                }}
                style={{ marginRight: DEFAULTS.btnSpacing }}
              />
              <Button
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
              <button
                style={{ width: 200, marginTop: 5 }}
                onClick={() => dispatch(addCredit())}
              >
                Add credit card
              </button>
            )}

            {/* ------How much deposit------ */}
            <Label text="How much deposite do you have?" />
            <span>
              <DepositField
                onChange={(val: string) => dispatch(depositChange(Number(val)))}
              />
            </span>
          </FormContainer>
          <CalculationContainer>
            <Output />
          </CalculationContainer>
        </section>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 3px 6px -2px grey;

  section {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

const Content = styled.div`
  width: ${DEFAULTS.contentWidth};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  span {
    display: flex;
    flex-direction: row;
  }
`;

const CalculationContainer = styled.div`
  border: 1px dashed green;
  width: 40%;
  padding: 10px;
`;
