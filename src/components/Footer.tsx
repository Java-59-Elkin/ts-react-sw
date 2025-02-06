import StyledButton from "./StyledButton.tsx";


const Footer = () => {
    return (
        <footer className={'clear-both bg-grey-color h-20 rounded-b-2xl grid grid-cols-7 items-center'}>
            <div className={'col-start-3'}>
            <StyledButton content1={'Send me an'} content2={'email'} />
            </div>
        </footer>
    );
};

export default Footer;