import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: rgb(40,40,40);
        --secondary-color: rgb(30,30,30);
        --decorative-color: rgb(40, 146, 215);
        --text-color: white;
    }
    
    #root {
        display: flex;
        flex-direction: column;
        height: 100vh;
        font-family: 'Roboto', Helvetica, sans-serif;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    span, button, label, a, textarea {
        color: var(--text-color);
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
