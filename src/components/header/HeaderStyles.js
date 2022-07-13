import styled from "styled-components";

export const Container = styled.div`
    background-color: rgba(0,0,0,0.3);
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
    color: white;
`

export const Button = styled.button`
    padding: 10px 60px;
    background-color: #edf2f4;
    border: none;
    border-radius: 20px;
    color: black;
    font-size: 20px;
    font-weight: bold;

    &:hover {
        cursor: pointer
    }
`

export const SearchForm = styled.form`
`;

export const SearchInput = styled.input`
    width: 400px;
    height: 26px;
    padding: 10px;
    border: none;
    :focus{
        outline: none;
    }
    border-radius: 10px 0 0 10px;
    letter-spacing: 5px;
`;

export const SearchButton = styled.button`
    padding: 15px 15px;
    border: none;
    border-radius: 0 10px 10px 0;
    background-color: #023047;
    color: white;

    &:hover {
        cursor:pointer;
    }
`;


export const Sugerencia = styled.div`
    padding: 5px;
`