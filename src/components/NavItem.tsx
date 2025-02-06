import StyledButton from "./StyledButton.tsx";

interface NavItemProps {
    itemTitle: string,
    changePage: (page: string) => void
}

const NavItem: React.FC<NavItemProps> = ({itemTitle, changePage}) => {
    return (
        <div onClick={() => changePage(itemTitle)}>
            <StyledButton mainContent={itemTitle} addContent='' />
        </div>
    );
};

export default NavItem;