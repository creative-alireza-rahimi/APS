import styled from "styled-components";

export const Foot = styled.section`
    background-color: white;
    border-top: 1px solid black;
    display: flex;
    flex-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 0;
`;

export const Title = styled.p`
    font-size: 1.2rem;
    font-weight: bolder;
    margin: 0.8rem 0;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
`;

export const Link = styled.a`
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
`;
