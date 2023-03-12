import styled from "styled-components";

export const Message = ({handleMessage}) => {
    return(
        <>
        <div style={{background: 'red'}}></div>
            <Section>
                <h3>Message</h3>
                <p>Fill the input first,</p>
                <p>then add it to your to do.</p>
                <Button onClick={() => handleMessage(false)}>Ok 😊</Button>
            </Section>
        </>
    );
}

const Button = styled.button`
    margin: 1rem 0;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    padding: 2px 1.2rem;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
`;