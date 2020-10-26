import styled from 'styled-components';
import bg from '../../assets/images/cta01.jpg';

const Design = styled.div`
    background-image: url(${bg});
    position: relative;
    background-position: bottom;
    background-attachment: fixed;
    width: 100%;
    margin: 26px 0 46px 0;
    padding: 64px 0 66px 0;
    background-repeat: no-repeat;
    background-size: cover;
`;

export default Design;
