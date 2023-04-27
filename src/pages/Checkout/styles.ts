import styled from "styled-components"
import { getContrastYIQ } from "../../util/format";
interface SectionItemsProps {
    backgroundColor: string;
}
export const Container = styled.main`
    display: flex;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
`;

export const SectionItems = styled.section<SectionItemsProps>`
    max-width: 420px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color:${props => props.backgroundColor};
    gap: 20px;
    padding: 2rem;
    color: ${props => getContrastYIQ(props.backgroundColor)};
    section {
        display: flex;
        align-items: center;
        gap: 12px;
        img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
        }
    }
    div {
        p {
            font-weight: 600;
            color: #767676;
        }
        strong {
            font-size: 32px;
        }
    }
    ul {
        list-style: none;
        width: 100%;
        li {
            width: 100%;
            display: flex;
            gap: 12px;
            img {
                width: 35px;
                height: 35px;
                border-radius: 5px;
            }
            div {
                span {
                    display: flex;
                    gap: 20px;
                }
            }
        }
    }
`

export const CheckoutContainer = styled.div`
    display: flex;
    flex: 1;
    background-color: #FFF;
`