import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;

    *:focus {
    outline: none;
    }

    .MuiButton-root {
        height: 40px;

    }

`;

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
`;
export const InputSearch = styled.input`
    border: none;
    border-top: 1px solid #ddd;    
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    height: 26px;
    background-color: transparent;
`;

export const Button = styled.button`
    height: 30px;
    border: none;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: transparent;

    svg {
        width: 20px;
    }
`;