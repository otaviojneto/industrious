import styled from 'styled-components';
import generic from '../../assets/images/generic.jpg';
import Colors from '../../styles/colors';

const BgGeneric = styled.div`
    align-items: center;
    background-attachment: fixed;
    background-image: url(${generic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    height: 268px;
    position: relative;
    text-align: center;
    width: 100%;

    &::before {
        content: '';
        background-image: linear-gradient(
            135deg,
            rgba(206, 27, 40, 0.5),
            rgba(17, 17, 17, 0.8)
        );
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 9;
    }
`;

export const TxtGeneric = styled.div`
    background-color: ${Colors.white};
    margin: 128px 0 96px 0;
    text-align: center;
`;

export default BgGeneric;
