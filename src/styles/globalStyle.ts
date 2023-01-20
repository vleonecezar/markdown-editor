import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: rgb(40,40,40);
        --secondary-color: rgb(30,30,30);
        --action-color: rgb(40, 146, 215);
        --text-color: white;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100vw;
        height: 100vh;
    }

    a {
        text-decoration: none;
    } 

    img {
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyle;
