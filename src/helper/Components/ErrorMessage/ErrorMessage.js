import { InfinitySpin } from 'react-loader-spinner'
import { Wrapper } from "./ErrorMessage.style.js";

export function ErrorMessage({ header = "", message }) {
    return (
        <Wrapper>
            <InfinitySpin
                width='200'
            />
            <div>
                <p>{header}</p>
                <p>{message}</p>
            </div>
        </Wrapper>
    );
}