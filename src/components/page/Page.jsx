import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export const Page = (props) => {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    );
}