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
