import styled from 'styled-components';

const DivHero = styled.div`
    position: relative;
    height: ${props => (props.height ? props.height : 550)}px;
    overflow-y: hidden;
    background-image: url('https://templated.co/items/demos/industrious/images/banner.jpg');
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        background-image: linear-gradient(
            135deg,
            rgba(206, 27, 40, 0.84),
            rgba(17, 17, 17, 0.76)
        );
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10;
    }

    .box {
        position: relative;
        text-align: center;
        padding: 0 32px;
        z-index: 20;

        h1 {
            margin-bottom: 20px;
        }

        @media (max-width: 768px) {
            p {
                &:first-of-type {
                    font-size: 40px;
                }
            }
        }
    }
`;

export default DivHero;
