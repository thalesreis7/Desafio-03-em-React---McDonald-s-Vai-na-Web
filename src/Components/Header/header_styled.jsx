import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    /* border: solid 1px red; */
    ${Center}
    height: 12vh;
    border-bottom: solid 1px #ccc;
    position: sticky;
    background-color: white;
    top: 0;
    z-index: 4;
`
export const Boxapp = styled.div`
    /* border: solid 1px red; */
    width: 90vw;
    ${Center}
    justify-content: space-between;
    /* cursor: pointer; */
`
export const BoxCard = styled.div`
    /* border: solid 1px blue; */
    width: 27vw;
    ${Center}
    justify-content: space-between;
`
export const App = styled.button`
    /* border: solid 1px red; */
    width: 13vw;
    ${Center}
    border-radius: 10px;
    height: 7vh;
    justify-content: space-evenly;
    background-color: ${props => props.color};
    border: none;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        background-color: red;
        color: white;
    }
    a{
        text-decoration: none;
        color: black;
    }
`





