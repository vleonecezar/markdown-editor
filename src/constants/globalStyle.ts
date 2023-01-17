import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-purple: rgb(89, 65, 169);
        --secondary-purple: rgb(62,46,118);
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    } 
`;

export default GlobalStyle;
