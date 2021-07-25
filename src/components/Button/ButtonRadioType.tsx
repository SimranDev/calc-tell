import { FC } from "react";
import styled from "styled-components";
import { COLORS, DEFAULTS } from "../../consts/styles";

export interface ButtonRadioTypeProps {
  title: string;
  checked?: boolean;
  name: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const ButtonRadioType: FC<ButtonRadioTypeProps> = ({
  title,
  checked,
  name,
  onClick,
  style,
}) => {
  return (
    <>
      <Container style={style}>
        <input type="radio" id={title} name={name} defaultChecked={checked} />
        <label htmlFor={title} onClick={() => onClick()}>
          {title}
        </label>
      </Container>
    </>
  );
};

export default ButtonRadioType;

const Container = styled.div`
  width: 100%;

  label {
    width: 100%;
    height: ${DEFAULTS.btnHeight};
    background-color: ${COLORS.inactiveBtn};
    color: ${COLORS.textInactive};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: ${DEFAULTS.btnRadius};

    :hover {
      cursor: pointer;
    }
  }

  input {
    position: fixed;
    display: none;
    :checked + label {
      background-color: ${COLORS.activeBtn};
      color: ${COLORS.textActiveBtn};
    }
  }
`;
