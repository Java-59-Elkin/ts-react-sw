import {starWarsInfo} from "../utils/constants.ts";
import StyledText from "./StyledText.tsx";

const StarWars = () => {
    return <StyledText content={starWarsInfo} />;
};

export default StarWars;