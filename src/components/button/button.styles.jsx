import styled from "styled-components";
import { colors } from "../../utils/style/style.utils";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${colors.primary[500]};
  color: ${colors.base.white};
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${colors.gray[100]};
    color: ${colors.gray[800]};
    border: 1px solid ${colors.gray[800]};
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: ${colors.base.white};

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: ${colors.gray[100]};
  color: ${colors.gray[800]};
  border: 1px solid ${colors.gray[800]};

  &:hover {
    background-color: ${colors.gray[800]};
    color: ${colors.base.white};
    border: none;
  }
`;
