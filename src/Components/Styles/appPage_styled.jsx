import styled, { css } from "styled-components";



export const Center = css`
    display: flex;
    justify-content: center;
    align-items:center;
`

export const Section = styled.section`
    /* border: solid 1px red; */
    height: 90vh;
    ${Center}
    flex-direction: column;
`
export const Figcaption = styled.figcaption`
    /* border: solid 1px blue; */
    height: 70vh;
    width: 80vw;
    position: absolute;  
    img{
        width: 100%;
        height: 100%;
    }
`
export const Boxinfo = styled.div`
    /* border: solid 1px red; */
    ${Center}
    flex-direction:column;
    align-items: start;
    justify-content:space-evenly;
    position: relative;
    right: 10%;
    bottom: 3%;
`
export const H2 = styled.h2`
    /* border: solid 1px green; */
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #292929;
`
export const Text = styled.p`
    /* border: solid 1px green; */
    width: 60%;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 200;
    color: #292929;
    position: relative;
    bottom: 20%;

`
export const SectionTwo = styled.section`
    /* border: solid 1px red; */
    height: 90vh;
    ${Center}
    flex-direction:column;
    justify-content: start;
`
export const  BoxCard = styled.div`
    /* border: solid 1px blue; */
    ${Center}
    justify-content: space-between;
    height: 100%;
    width: 80%;
    img{
        /* border: solid 1px; */
        width: 30vw;
    }
    button{
        border-radius: 3px;
    }
`
export const SecondBox = styled.div`
    border: solid 1px #ccc;
    box-shadow: 1px 2px 0  #888 ;
    ${Center}
    width:35vw;
    height: 68vh;
    padding-top: 1rem;
    border-radius: 10px;
    &:hover{
        transition: 300ms linear;
        transform: scale(1.1);
    }
`
