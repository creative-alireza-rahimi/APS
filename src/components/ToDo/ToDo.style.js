import styled from "styled-components";

export const ToDoPage = styled.section`
    width: 95%;
    border: 1px solid black;
    border-radius: 1.2rem;
    box-shadow: 1px 1px 2.4rem 1px rgb(0 0 0 / 50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
`;

export const Title = styled.span`
    margin-right: 5px;
`;

export const ToDoAction = styled.section`
    margin: 2rem 0;
    display: flex;

    @media (width < 450px) {
        flex-direction: column;
        width: 80%
    }
`;

export const Description = styled.div`
    display: flex;
`;

export const ToDoInput = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:focus {
        outline: none;
        border: 1px solid black;
        box-shadow: 0 0 5px 0 rgb(0 0 0 / 80%);
    }

    @media (width < 450px) {
        width: 90%;
    }
`;

export const FormButtons = styled.div`
    display: flex;

    @media (width < 450px) {
        margin: 1rem 0;
        justify-content: space-between;
    }
`;

export const Button = styled.button`
    margin: 0 1rem;
    margin-right: 0.4rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    padding: 2px 1.2rem;

    @media (width < 450px) {
        width: 45%;
    margin: 0 ;

    }
`;

export const CancelButton = styled.button`
    margin: 0 0.2rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    padding: 2px 0.8rem;

    @media (width < 450px) {
        width: 45%;
    margin: 0;

    }
`;

export const ToDoItemsStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ToDoList = styled.main`
    width: 80%;
    margin: 2rem 0;
    overflow-y: scroll;
    height: 20rem;
`;

export const ToDoItems = styled.p`
display: flex;
`;

export const FontAwesomeIconStyle = styled.div`
    & > * {
        margin: 0 1rem;
        cursor: pointer;
    }
`;