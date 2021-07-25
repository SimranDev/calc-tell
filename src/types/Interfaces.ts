export interface IPeriodValue {
  value: number;
  period: number;
}

export interface IParam {
  index: number;
  value: number;
}

export interface IState {
  borrow: number;
  income: number;
  loan: number;
  deposit: number;
  credit: number;
  salary1: number;
  salary1_period: number;
  salary2: number;
  salary2_period: number;
  other_list: IPeriodValue[];
  credit_list: number[];
  loan_list: number[];
}