import NavItem from "./NavItem.tsx";
import {navItems} from "../utils/constants.ts";

// @ts-ignore
const Navigation = ({changePage}) => {
    return (
        <nav className={'fixed top-2 left-12'}>
            <ul className={'flex gap-4'}>
                {navItems.map(item => <NavItem changePage={changePage} itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;