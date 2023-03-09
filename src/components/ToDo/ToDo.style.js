import styled from "styled-components";

export const ToDoPage = styled.section`
    width: 95%;
    border: 1px solid black;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
`;

export const Title = styled.span`
    
`;

export const ToDoAction = styled.section`
    margin: 2rem 0;
`;

export const ToDoInput = styled.input`
    border: 1px solid black;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    margin: 0 1rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    padding: 2px 1.2rem;
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