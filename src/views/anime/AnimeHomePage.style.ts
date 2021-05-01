import { Card } from '@material-ui/core';
import styled from 'styled-components';

export const FilterWrapper = styled(Card)`
    padding: 20px;
    justify-content: flex-end;
    display: flex;

    .MuiInputBase-root {
        height: 40px;
        margin-left: 15px;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    padding 20px;
`;