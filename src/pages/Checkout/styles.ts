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
    min-height: 600px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
            color: ${props => getContrastYIQ(props.backgroundColor)};
        }
        strong {
            font-size: 32px;
        }
    }
    ul {
        list-style: none;
        width: 100%;
        li {
            margin-top: 8px;
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
    flex-direction: column;
    flex: 1;
    background-color: #FFF;
    padding: 2rem;
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

export const PaymentMethodsContainer = styled.div`
    display: flex;
    width: 100%;
    max-height: 55px;
    gap: 10px;
    justify-content: center;
`

export const Divider = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d1d1;
    margin: 10px 0px;
`

export const FinishContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    img {
        width: 180px;
        height: 180px;
    }
    p {
        width: 420px;
    }
`