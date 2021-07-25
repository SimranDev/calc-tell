import { FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../consts/styles";

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <Container>
      <h5>© 2021 Tella Ltd</h5>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h5 {
    color: ${COLORS.textPrimary};
  }
`;
