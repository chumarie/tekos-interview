import { Card } from '@material-ui/core';
import styled from 'styled-components';


export const FilterWrapper = styled(Card)`
    padding: 20px;
    justify-content: flex-end;
    display: flex;
    margin-bottom: 20px;
    border: 1px solid #dddddd;

    .MuiInputBase-root {
        height: 40px;
        margin-left: 10px;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    padding 20px;
`;
export const ModalContainer = styled.div`
    display: flex;
    height: 300px;

    img {
        margin-right: 15px;
        border-radius: 10px;
    }

    p {
        overflow-y: auto;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;