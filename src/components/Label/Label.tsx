import { FC } from "react";
import styled from "styled-components";
import { COLORS, DEFAULTS } from "../../consts/styles";

export interface LabelProps {
  text: string;
}

const Label: FC<LabelProps> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Label;

const Container = styled.h4`
  color: ${COLORS.textPrimary};
  padding: 0;
  margin-top: ${DEFAULTS.contentTopMargin};
  margin-bottom: 2px;
`;
