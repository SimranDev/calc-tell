import styled from "styled-components";
import { COLORS, DEFAULTS } from "../../consts/styles";

export interface AddButtonProps {
  title: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const AddButton: React.FC<AddButtonProps> = ({ title, onClick, style }) => {
  return (
    <Container onClick={onClick} style={style}>
      {title}
    </Container>
  );
};

export default AddButton;

const Container = styled.button`
  height: ${DEFAULTS.btnHeight};
  color: ${COLORS.textInactive};
  background-color: ${COLORS.inactiveBtn};
  border-radius: ${DEFAULTS.btnRadius};
  font-size: ${DEFAULTS.btnFontSize};
  padding: 0 20px;
  box-shadow: none;
  border: none;
  width: fit-content;
  :hover {
    cursor: pointer;
  }
`;
