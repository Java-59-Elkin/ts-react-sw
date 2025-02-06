
// eslint-disable-next-line react/prop-types
const StyledButton = ({content1, content2}) => {
    return (
        <div
            className={'bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer text-center hover:bg-red-500 hover:text-white'}>{content1} <span
                className={'text-black uppercase'}>{content2}</span></div>
    );
};


export default StyledButton;