import styled, { css } from "styled-components";
interface ButtonContainerProps {
    isSelected: boolean;
    selectedColor?: string;
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
    padding: 1rem;
    border: none;
    ${props => props.isSelected && css`border: 2px solid ${props.selectedColor}; !important`}
    border-radius: 5px;
    transition: filter ease-out 500ms;
    overflow:hidden;
    &:hover {
        filter: brightness(.9);
    }
    div {
        display: flex;
        min-width: 40px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`