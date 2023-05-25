import {
  ColorBox,
  ColorGroup,
  DesignContainer,
  Hex,
  Info,
  Number,
  Swatch,
} from "./design.styles";

import { colors } from "../../utils/style/style.utils";
import { Fragment } from "react";

const Design = () => {
  return (
    <DesignContainer>
      <h1>Colors</h1>

      {Object.keys(colors).map((colorKey) => (
        <Fragment key={colorKey}>
          <h2>{colorKey}</h2>

          <ColorGroup>
            {Object.keys(colors[colorKey]).map((nestedKey) => {
              const hex = colors[colorKey][nestedKey];

              return (
                <ColorBox key={nestedKey}>
                  <Swatch hex={hex} />
                  <Info>
                    <Number>{nestedKey}</Number>
                    <Hex>{hex}</Hex>
                  </Info>
                </ColorBox>
              );
            })}
          </ColorGroup>
        </Fragment>
      ))}
    </DesignContainer>
  );
};

export default Design;
