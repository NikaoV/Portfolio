import styled from "styled-components";

export const SkillsCardContainer =styled.div`
    display: grid;
    grid-template-columns: auto auto ;
    grid-gap:2rem;
    padding:0 5%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display:block;
        padding:0;
    }
`

export const SkillsCard =styled.div`
    width: 180px;
    height: 170px;
    border: 1px solid #fff;
    padding: 2rem 0;
    margin-top:1rem; 
    border-radius:1rem;
    display:Flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary_light};


    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width:260px;
        margin-top: 2rem;
    
    }
`
export const SkillsCard2 =styled.div`
    width: 180px;
    height: 170px;
    border: 1px solid #fff;
    padding: 2rem 0;
    margin-top:1rem; 
    border-radius:1rem;
    display:Flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary_light};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width:260px;
        margin-top: 2rem;
    
    }
`