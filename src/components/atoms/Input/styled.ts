import { theme } from "reader/styles";
import { IDefaultText } from "src/types/IDefaultText";
import styled from "styled-components";

const StyledInput = styled.input<IDefaultText>`
    background-color: ${theme.colors.secondary.inputBackground};
    padding: 5px 0px;
    text-align: center;
    &:focus {
        border: none;
        outline: none;
        background-color: ${theme.colors.secondary.defaultButtonBackgroundHover};
    }
    transition: 1s all;
    font-size: ${({ fontSize, theme }) => !!fontSize ? `${fontSize}px` : `${theme.fontSize.md}px`};
    font-weight: ${({ fontWeight, theme }) => fontWeight || theme.fontWeight.regular};
    color: ${({ theme, color }) => color || theme.colors.primary.black};
    line-height: ${({ lineHeight }) => lineHeight || "unset"};
    text-align: ${({ textAlign }) => textAlign || "unset"};
    align-self: ${({ alignSelf }) => alignSelf && alignSelf};
    margin: ${({ margin }) => margin && margin};
    padding: ${({ padding }) => padding && padding};
    font-style: normal;
`

export { StyledInput }