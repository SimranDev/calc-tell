import { FC, useState } from "react";
import Button from "../components/Button/ButtonRadioType";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Label from "../components/Label/Label";
import InputField from "../components/InputField/InputField";
import Output from "../components/Output/Output";
import { useDispatch, useSelector } from "react-redux";
import {
  otherIncomeChange,
  otherIncomePeriodChange,
  addOtherIncome,
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
import OtherField from "../components/InputField/OtherIncomeField";
import LoanField from "../components/InputField/LoanField";
import DepositField from "../components/InputField/DepositField";
import { DEFAULTS } from "../consts/styles";
import AddButton from "../components/Button/AddButton";
import SalaryBlock from "../combined-components/SalaryBlock";
import IncomeBlock from "../combined-components/IncomeBlock";
import LoanBlock from "../combined-components/LoanBlock";
import CreditCardBlock from "../combined-components/CreditCardBlock";
import DepositBlock from "../combined-components/DepositBlock";

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <Header />
        <section>
          <FormContainer>
            <SalaryBlock />
            <IncomeBlock />
            <LoanBlock />
            <CreditCardBlock />
            <DepositBlock />
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
  padding-bottom: 50px;

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
  width: 35%;
  margin-top: ${DEFAULTS.contentTopMargin};
  padding-left: 40px;
`;
