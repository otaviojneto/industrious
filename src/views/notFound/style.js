import styled from 'styled-components';
import Colors from '../../styles/colors';

const Box = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 40px;
`;

export const Image = styled.img`
    display: block;
    margin: 50px auto;
    max-width: 600px;
`;

export const Button = styled.a`
    color: #536dfe;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    margin: 0 auto;
    border: 2px solid #536dfe;
    border-radius: 12px;
    padding: 12px 32px;
    cursor: pointer;
    transition: 0.15s ease-in-out;
    text-transform: uppercase;

    &:hover {
        color: ${Colors.white};
        background-color: #536dfe;
    }
`;

export default Box;
