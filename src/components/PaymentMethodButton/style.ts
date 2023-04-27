import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 1rem;
    border: none;
    border-radius: 5px;
    transition: filter ease-out 500ms;
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