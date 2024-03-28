import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Section = styled.section`
    /* border: solid 1px blue; */
    height: 95vh;
    background-color: #A10408;
    ${Center}
`
export const BoxError = styled.div`
    /* border: solid 1px yellowgreen; */
    width:70vw;
    height:80vh;
    ${Center}
    flex-direction: column;
    position: absolute;
`
export const Fig = styled.figcaption`
    /* border: solid 1px green; */
    width: 100%;
    height:50vh;
    ${Center}
    p{
        font-family:'Inter', sans-serif;
        font-size: 18.75rem;
        font-weight: 500;
        color: #FFCD00;

    }
    img{
        /* border: solid 1px orange; */
        width: 40%;
    }
`
export const H2 = styled.h2`
    /* border: solid 1px blue; */
    width: 30vw;
    ${Center}
    font-family: 'Roboto', sans-serif;
    font-size: 2.3rem;
    font-weight: bold;
    color: #FFCD00;
`
export const Text = styled.p`
    /* border: solid 1px; */
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    color: white;
    position: relative;
    bottom: 7%;
`
export const Btn = styled.button`
    border: solid 1px yellowgreen;
    width: 7vw;
    height: 6vh;
    border-radius: 8px;
    background-color: #A10408;
    color: yellowgreen;
    cursor: pointer;
    &:hover{
        background-color: #FFCD00;
        color:#A10408;
    }
    
`
