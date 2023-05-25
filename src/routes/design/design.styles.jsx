import styled from "styled-components";

import { colors, fonts, shadows } from "../../utils/style/style.utils";

export const DesignContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    text-transform: capitalize;

    ${fonts.displayXL.semibold}
  }

  h2 {
    text-transform: capitalize;

    ${fonts.displaySM.semibold}
  }
`;

export const ColorGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 20px;
  width: 100%;
`;

export const ColorBox = styled.div`
  display: grid;
  grid-template-rows: 1.3fr 1fr;
  border-radius: 12px;
  overflow: hidden;

  ${shadows.lg}
`;

export const Swatch = styled.div`
  width: 100%;
  background-color: ${({ hex }) => `${hex}`};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px 16px;

  background-color: ${colors.base.white};
`;

export const Number = styled.span`
  display: block;

  ${fonts.textMD.semibold}
`;

export const Hex = styled.span`
  display: block;

  ${fonts.textMD.regular}
`;
