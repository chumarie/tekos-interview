import Card from "@material-ui/core/Card";
import styled from 'styled-components'

export const ItemCard = styled(Card)`
    height: 100%;
    border: 1px solid #dddddd;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    svg {
        fill: #ffb35e;
    }

    .MuiCardHeader-content {
        width: 100%;
    }
    &:hover {
        background: #fbfbfb;
    }
`;