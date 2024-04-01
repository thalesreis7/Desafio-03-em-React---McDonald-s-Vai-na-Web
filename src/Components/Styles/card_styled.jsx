import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    /* border: solid 1px green; */
    height: 38.7vh;
    width: 21.2vw;
    ${Center}
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    background-color: white;
    border-radius: 13px;
    &:hover{
            transition: 300ms linear;
            transform: scale(1.1);
    }
    p{
        /* border: solid 2px green; */
        height: 10vh;
        width: 98%;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        ${Center}
        align-items: flex-start;
        
    }
    button{
        background-color: #FFBC0D;
        border-radius: 10px;
        padding: 10px 20px;
        border: none;
        width: 10vw;
        position: relative;
        bottom: 2%;
        cursor: pointer;
        &:hover{
            background-color: red;
            color: white;
           
        }

    }
`