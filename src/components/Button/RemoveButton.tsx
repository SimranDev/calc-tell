import styled from "styled-components";
import { COLORS } from "../../consts/styles";

export interface Props {
  onClick: () => void;
}

const RemoveButton: React.FC<Props> = ({ onClick }) => {
  return <Container onClick={onClick}>x</Container>;
};

export default RemoveButton;

const Container = styled.button`
  height: 26px;
  width: 26px;
  border: none;
  color: white;
  background-color: ${COLORS.textPrimary};
  border-radius: 50px;

  :hover {
    cursor: pointer;
  }
`;
