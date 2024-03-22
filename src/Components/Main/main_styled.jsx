import styled, { css } from "styled-components"

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Promotion = styled.section`
    background-color: #FEB706;
    /* border: solid 1px red; */
    height: 90vh;
    ${Center}
    flex-direction: column;
    justify-content: space-evenly;
    h2{
        /* border: solid 1px; */
        font-family: 'Inter', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        text-transform: capitalize;
        color: white;
    }

`
export const BoxCard = styled.div`
    /* border: solid 2px blue; */
    width: 80vw;
    ${Center}
    justify-content:space-around;
`
export const Section = styled.section`
    /* border: solid 1px red; */
    background-color: #ffc72c;
    height: 90vh;
    ${Center}
    flex-direction: column;
    justify-content: space-evenly;
`
 export const BoxRequests = styled.div`
    /* border: solid 1px blue; */
    width: 90%;
    height: 63vh;
    ${Center}
    justify-content: space-between;
    img{
        width:30vw;
        cursor: pointer;
    }
 `

export const BoxText = styled.div`
    /* border: solid 1px red; */
    width: 45%;
    height:20vh;
`
export const Text = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
    color: white;
    span{
        color:#DB0007;
    }
`
export const BoxImages = styled.div`
    /* border: solid 1px green; */
    height: 10vh;
    width: 30vw;
    ${Center}
    justify-content: space-between;
    img{
        width: 6vw;
        cursor: pointer;
        &:hover{
            transition: 300ms linear;
            transform: scale(1.1);
        }
    }
`