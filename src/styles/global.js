import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.jpg';
import Colors from './colors';
import './grid.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        border:0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        margin: 0;
        outline: none !important;
        padding: 0;

        ::before,
        ::after {
            box-sizing: inherit;
        }

        ::-moz-selection {
            background-color: ${Colors.primary};
            color: ${Colors.white};
        }

        ::selection {
            background-color: ${Colors.primary};
            color: ${Colors.white};
        }
    }

    body,
    html {
        font-size: 16px;
        
        &::after {
            content: '';
            color: ${Colors.grey};
            background-color: ${Colors.white};
            background-image: url(${bg});
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            display: block;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: .05;
        }
    }

    

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    textarea {
        resize: none;
    }
`;

export default GlobalStyle;
