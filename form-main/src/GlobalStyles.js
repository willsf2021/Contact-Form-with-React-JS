import { createGlobalStyle } from "styled-components";
import { COLORS } from "./services/theme";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body {
        height: 100vh;
        background-color: ${COLORS.primary.green200};
        color:${COLORS.neutral.grey900};
        font-family: "Karla", sans-serif;
    }
    
    input, textarea, button {
        font-family: "Karla", sans-serif
    }
    
    main {
        @media (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: center;
            padding:0px;
        }
        padding: 24px 0px;
        background-color: transparent;   
        height: 100vh;
    }

`;
