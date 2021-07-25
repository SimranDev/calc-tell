import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, IParam, IPeriodValue } from "../types/Interfaces";

const initialState: IState = {
  borrow: 0,
  income: 0,
  loan: 0,
  deposit: 0,
  credit: 0,
  salary1: 0,
  salary1_period: 1,
  salary2: 0,
  salary2_period: 1,
  other_list: [],
  credit_list: [],
  loan_list: [],
};

const updateState = (state: IState) => {
  state.income =
    state.salary1 * state.salary1_period + state.salary2 * state.salary2_period;
  for (let i = 0; i < state.other_list.length; i++)
    state.income += state.other_list[i].value * state.other_list[i].period;

  state.loan = 0;
  for (let i = 0; i < state.loan_list.length; i++)
    state.loan += state.loan_list[i];

  state.credit = 0;
  for (let i = 0; i < state.credit_list.length; i++)
    state.credit += state.credit_list[i];

  state.borrow = state.income * 5 - state.loan - state.credit;
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    salaryChange: (state: IState, action: PayloadAction<number>) => {
      state.salary1 = action.payload;
      updateState(state);
    },

    salaryPeriodChange: (state: IState, action: PayloadAction<number>) => {
      state.salary1_period = action.payload;
      updateState(state);
    },

    salary2Change: (state: IState, action: PayloadAction<number>) => {
      state.salary2 = action.payload;
      updateState(state);
    },

    salary2PeriodChange: (state: IState, action: PayloadAction<number>) => {
      state.salary2_period = action.payload;
      updateState(state);
    },

    addOther: (state: IState) => {
      state.other_list.push({
        value: 0,
        period: 1,
      });
      updateState(state);
    },

    deleteOther: (state: IState, action: PayloadAction<number>) => {
      state.other_list = [...state.other_list].filter(
        (item, index) => index !== action.payload
      );
      updateState(state);
    },

    deleteAllOther: (state: IState) => {
      state.other_list = [];
      updateState(state);
    },

    otherIncomeChange: (state: IState, action: PayloadAction<IParam>) => {
      state.other_list = [...state.other_list].map(
        (item: IPeriodValue, index: number) => {
          return action.payload.index === index
            ? { value: action.payload.value, period: item.period }
            : item;
        }
      );

      updateState(state);
    },

    otherIncomePeriodChange: (state: IState, action: PayloadAction<IParam>) => {
      state.other_list = [...state.other_list].map(
        (item: IPeriodValue, index: number) => {
          return action.payload.index === index
            ? { value: item.value, period: action.payload.value }
            : item;
        }
      );
      updateState(state);
    },

    addLoan: (state: IState) => {
      state.loan_list.push(0);
      updateState(state);
    },

    deleteLoan: (state: IState, action: PayloadAction<number>) => {
      state.loan_list = [...state.loan_list].filter(
        (item, index) => index !== action.payload
      );
      updateState(state);
    },

    deleteAllLoan: (state: IState) => {
      state.loan_list = [];
      updateState(state);
    },

    loanChange: (state: IState, action: PayloadAction<IParam>) => {
      state.loan_list = [...state.loan_list].map(
        (item: number, index: number) => {
          return action.payload.index === index ? action.payload.value : item;
        }
      );

      updateState(state);
    },

    depositChange: (state: IState, action: PayloadAction<number>) => {
      state.deposit = action.payload;
      updateState(state);
    },

    addCredit: (state: IState) => {
      state.credit_list.push(0);
      updateState(state);
    },

    deleteCredit: (state: IState, action: PayloadAction<number>) => {
      state.credit_list = [...state.credit_list].filter(
        (item, index) => index !== action.payload
      );
      updateState(state);
    },

    deleteAllCredit: (state: IState) => {
      state.credit_list = [];
      updateState(state);
    },

    creditChange: (state: IState, action: PayloadAction<IParam>) => {
      state.credit_list = [...state.credit_list].map(
        (item: number, index: number) => {
          return action.payload.index === index ? action.payload.value : item;
        }
      );
      updateState(state);
    },
  },
});

export const {
  salaryChange,
  salaryPeriodChange,
  salary2Change,
  salary2PeriodChange,
  otherIncomeChange,
  otherIncomePeriodChange,
  addOther,
  deleteOther,
  deleteAllOther,
  loanChange,
  addLoan,
  deleteLoan,
  deleteAllLoan,
  creditChange,
  addCredit,
  deleteCredit,
  deleteAllCredit,
  depositChange,
} = counterSlice.actions;

export default counterSlice.reducer;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
