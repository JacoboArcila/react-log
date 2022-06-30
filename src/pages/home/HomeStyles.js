import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  margin: 30px 70px;
  display: flex;
  flex-wrap: wrap;

  .contenedor {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }

  .contenedor figure {
    margin: 0 18px;
    position: relative;
    overflow: hidden;
    border-radius: 0 0 30px 30px;
    width: 300px;
    height: 300px;
    border-top: 2px solid black;
    cursor: auto;
  }
  .contenedor figure img {
    width: 300px;
    height: 300px;
    transition: all 400ms ease-out;
    will-change: transform;
  }
  .contenedor figure .capa {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    transition: all 400ms ease-out;
    opacity: 0;
    visibility: hidden;
    text-align: center;
  }
  .contenedor figure:hover > .capa {
    opacity: 1;
    visibility: visible;
  }

  .contenedor figure:hover > img {
    transform: scale(1.1);
  }

  .contenedor figure .capa button {
    margin: 120px  auto;
    padding: 10px 50px;
    border: none;
    background-color: white;
    color: black;
    font-size: 15px;
    border-radius: 30px;
    -webkit-box-shadow: 0px 3px 7px -1px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 3px 7px -1px rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 7px -1px rgba(255, 255, 255, 1);
    transition: all 0.2s ease;

    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
`;

export const ContainerUser = styled.div`
  margin: 30px 30px;
  border-radius: 30px;
  background-color: #f4f1de;
  height: 377px;
  width: 300px;
  -webkit-box-shadow: 0px 0px 26px 3px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 26px 3px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 26px 3px rgba(0, 0, 0, 1);

  .name {
    text-align: center;
    font-size: 30px;
    margin: 20px auto;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  color: white;
  font-size: 40px;
  margin: 30px auto;
`;
