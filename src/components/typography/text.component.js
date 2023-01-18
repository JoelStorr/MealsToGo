import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeight.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: warp;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;
const label = (theme) => `
    font-size: ${theme.fontSizes.label};
`;
const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
`;
const error = (theme) => `
    font-size: ${theme.fontSizes.error};
`;
const hint = (theme) => `
    font-size: ${theme.fontSizes.hint};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
