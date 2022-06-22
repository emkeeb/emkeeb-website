import styled from "styled-components";

const Colors = {
  main: {
    lightest: "#F1E7E0",
    lighter: "#DFD2C3",
    light: "#D7C9B8",
    dark: "#B09171",
    darkest: "#695847",
  },
  accent: "#4169E1",
  white: "#FFFFFF",
  black: "#000000",
  grey: "#474747",
  greyLightest: "#EBEBEB",
};

const FontSize = {
  humongus: "100px",
  gigantic: "75px",
  big: "55px",
  header: "34px",
  subHeader: "21px",
  body: "16px",
  secondary: "14px",
};

const Borders = {
  radius: {
    sm: "8px",
    md: "12px",
  },
};

const ZIndex = {
  header: "500",
};

const ButtonPrimary = styled.button`
  background-color: ${Colors.accent};
  color: ${Colors.white};
  border-radius: 20px;
  border: 2px solid ${Colors.accent};
  padding: 10px 40px;
  height: 45px;
  width: 175px;

  :hover {
    background-color: transparent;
    background-repeat: no-repeat;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    border: 2px solid ${Colors.accent};
    color: ${Colors.black};
  }
`;

const ButtonSecondary = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: 2px solid ${Colors.black};
  border-radius: 20px;
  padding: 10px 40px;
  height: 45px;
  width: 175px;

  :hover {
    background-color: ${Colors.accent};
    border: 2px solid ${Colors.accent};
    color: ${Colors.white};
    outline: none;
    overflow: hidden;
    cursor: pointer;
  }
`;

export { Colors, FontSize, Borders, ZIndex, ButtonPrimary, ButtonSecondary };
