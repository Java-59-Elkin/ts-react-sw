
interface Props {
    mainContent: string,
    addContent: string
}

const StyledButton: React.FC<Props> = ({mainContent, addContent}) => {
    return (
        <div
            className={'bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer text-center hover:bg-red-500 hover:text-white'}>{mainContent}
            <span className={'text-black uppercase'}>{addContent}</span>
        </div>
    );
}

export default StyledButton;