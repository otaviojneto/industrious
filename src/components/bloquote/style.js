import styled from 'styled-components';
import Colors from '../../styles/colors';

const Bloquet = styled.div`
    background-color: ${Colors.white};
    margin-bottom: 20px;
    padding: 42px;
`;

export const Quote = styled.p`
    border-left: solid 8px rgba(0, 0, 0, 0.25);
    font-style: italic;
    margin-bottom: 32px;
    padding: 16px 0 16px 32px;
`;

export const Autor = styled.div`
    align-items: center;
    color: ${Colors.grey};
    display: flex;
    justify-content: space-between;

    img {
        border-radius: 50%;
        margin-right: 12px;
        width: 50px;
    }

    Strong {
        color: ${Colors.primary};
    }
`;

export default Bloquet;
