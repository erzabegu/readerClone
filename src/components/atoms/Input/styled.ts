import { theme } from "reader/styles";
import { IDefaultText } from "src/types/IDefaultText";
import styled from "styled-components";

const StyledInput = styled.input<IDefaultText>`
    background-color: ${({ backgroundColor, theme }) => !!backgroundColor ? `${backgroundColor}` : `${theme.colors.primary.lightGrey}`};
    border: none;
    padding: 5px 10px;
    text-align: center;
    &:focus {
        outline: none;
        background-color: #F0EEF0;
    }
    transition: 1s all;
    width: 70%;
    margin: 0px auto;
    font-size: ${({ fontSize, theme }) => !!fontSize ? `${fontSize}px` : `${theme.fontSize.sm}px`};
    font-weight: ${({ fontWeight, theme }) => fontWeight || theme.fontWeight.regular};
    color: ${({ theme, color }) => color || theme.colors.primary.black};
    line-height: ${({ lineHeight }) => lineHeight || "unset"};
    align-self: ${({ alignSelf }) => alignSelf && alignSelf};
    margin: ${({ margin }) => margin && margin};
    padding: ${({ padding }) => padding && padding};
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 7px;
`

export { StyledInput }