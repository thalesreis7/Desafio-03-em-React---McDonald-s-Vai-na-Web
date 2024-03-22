import styled, { css } from "styled-components";

export const Center = css `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.footer`
    /* border: solid 1px black; */
    height: 9vh;
    ${Center}
    justify-content: space-between;
    border-top: solid 1px #ccc;
`
export const Copy = styled.div`
    /* border: solid 1px red; */
    width: 18vw;
    ${Center}
    justify-content: space-evenly;
    img{
        width: 2vw;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 200;
        color:#9b9797;
    }
`
export const Boxmobile = styled.div`
    /* border: solid 1px red; */
    width: 20vw;
    ${Center}
    justify-content: space-around;
    img{
        width: 7.2vw;
        cursor: pointer;
        &:hover{
            transition: 300ms linear;
            transform: scale(1.1);
        }
    }

`