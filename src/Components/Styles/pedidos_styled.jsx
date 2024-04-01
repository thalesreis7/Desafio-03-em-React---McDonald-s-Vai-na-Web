import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    /* border: solid 1px red; */
    height: 15vh;
    ${Center}
    border-bottom: solid 1px #ccc;
    position: sticky;
    background-color: white;
    top: 0;
    z-index: 4;
`
export const Navegation = styled.nav`
    /* border: solid 1px blue; */
    width: 45%;
    height: 50%;
    ${Center}
`
export const BoxLi = styled.ul`
    /* border: solid 1px green; */
    width: 35vw;
    height: 7vh;
    ${Center}
    justify-content: space-between;
    li{
        /* border: solid 1px; */
        list-style: none;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;
        &:hover{
            color:#FFCD00;
        }
    }
`
export const Section = styled.section`
    border: solid 1px red;
    height: 89vh;
    ${Center}
    align-items: start;
    img{
        width: 98.9vw;
    }
`
export const SectionTwo = styled.section`
    border: solid 1px red;
    height: 90vh;
    ${Center}
    align-items: start;
    padding-top: 1rem;
`
