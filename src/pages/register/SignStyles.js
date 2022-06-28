import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    margin: 50px auto;
    border-radius: 30px;
    width: 400px;
    height: 500px;
    padding: 30px;
    background-color: #edf2f4;
    -webkit-box-shadow: 0px 0px 75px 7px rgba(63,55,201,1);
    -moz-box-shadow: 0px 0px 75px 7px rgba(63,55,201,1);
    box-shadow: 0px 0px 75px 7px rgba(63,55,201,1);

    h1 {
        text-align: center;
    }
`

export const Input = styled.input`
    margin: 15px auto;
    display: block;
    width: 70%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 30px;
    padding: 5px 20px 5px 40px;
    -webkit-box-shadow: 0px 4px 29px -5px rgba(67,97,238,1);
    -moz-box-shadow: 0px 4px 29px -5px rgba(67,97,238,1);
    box-shadow: 0px 4px 29px -5px rgba(67,97,238,1);
    transition: ease 0.3s all;

    &:focus {
        background-color: rgb(229 229 229);
    }
`

export const ContainerText = styled.div`
    text-align: center;
    margin-top: 30px;

    p {
        font-size: 11px;
        margin: 5px;
    }
`

export const Button = styled.button`
    display: block;
    margin: 20px auto;
    padding: 10px 30px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 18px;
    background: rgb(72,12,168);
    background: linear-gradient(346deg, rgba(72,12,168,1) 38%, rgba(114,9,183,1) 60%);

    &:hover{
        cursor: pointer;
    }
`

export const Section = styled.section`
    width: 100%;
    display: flex;
    gap: 5px;
    position: relative;
`

export const IconSpan = styled.span`
    padding: 2%;
    position: absolute;
    top: 20px;
    left: 35px;
`;