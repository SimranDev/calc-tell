import styled from "styled-components";
import { COLORS } from "../../consts/styles";
import Label from "../Label/Label";

interface OutputItemProps {
  label: string;
  dollars: number;
}

const OutputItem: React.FC<OutputItemProps> = ({ label, dollars }) => {
  return (
    <Container>
      <Label text={label} />
      <p>${dollars}</p>
    </Container>
  );
};

export default OutputItem;

const Container = styled.div`
  margin-bottom: 20px;
  p {
    margin: 0;
    color: ${COLORS.textPrimary};
  }
`;
