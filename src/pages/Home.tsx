import styled from "styled-components";
import Header from "../components/Header/Header";
import Output from "../components/Output/Output";
import { DEFAULTS } from "../consts/styles";
import SalaryBlock from "../combined-components/SalaryBlock";
import IncomeBlock from "../combined-components/IncomeBlock";
import LoanBlock from "../combined-components/LoanBlock";
import CreditCardBlock from "../combined-components/CreditCardBlock";
import DepositBlock from "../combined-components/DepositBlock";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
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
