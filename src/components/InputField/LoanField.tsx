import { FC } from "react";
import styled from "styled-components";
import { COLORS, DEFAULTS } from "../../consts/styles";
import RemoveButton from "../Button/RemoveButton";

export interface LoanFieldProps {
  onChange: (val: string) => void;
  onDelete: () => void;
}

const LoanField: FC<LoanFieldProps> = ({ onChange, onDelete }) => {
  return (
    <Container>
      <label>$</label>
      <Input onChange={(e) => onChange(e.target.value)} />
      <RemoveButton onClick={onDelete}>x</RemoveButton>
    </Container>
  );
};

export default LoanField;

const Container = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  label {
    position: absolute;
    z-index: 1;
    left: 12px;
    color: ${COLORS.textPrimary};
    font-size: 18px;
  }

  button {
    position: absolute;
    right: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: ${DEFAULTS.btnHeight};
  position: relative;
  border-radius: ${DEFAULTS.btnRadius};
  text-indent: 24px;
  border-color: ${COLORS.bg};
  outline: none;
  border-style: solid;
  border-width: 2px;
  font-size: 18px;

  :focus {
    border-color: ${COLORS.textPrimary};
  }
`;
