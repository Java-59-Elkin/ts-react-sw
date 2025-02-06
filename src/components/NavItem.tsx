import StyledButton from "./StyledButton.tsx";

const NavItem = ({itemTitle, changePage}) => {
    return (
        <div onClick={() => changePage(itemTitle)}>
            <StyledButton content1={itemTitle} />
        </div>

    );
};

export default NavItem;