import styled from 'styled-components';
import Colors from '../../styles/colors';

const BgFooter = styled.div`
    background-color: #333;
    color: ${Colors.greywhite};
    margin-top: 124px;
`;

export const List = styled.ul`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-right: 10px;

    .item {
        border-bottom: ${props =>
            props.border && `1px solid ${Colors.greywhite}`};

        &:last-of-type {
            border-bottom: 0;
        }

        .link {
            align-items: center;
            color: ${Colors.greywhite};
            display: flex;
            padding: 16px 0 16px 2px;

            &:hover {
                color: ${Colors.primary};
                transition: 0.2s ease-in-out;
            }

            .icon {
                align-items: center;
                background-color: ${Colors.black};
                border-radius: 4px;
                color: ${Colors.white};
                display: flex;
                height: 24px;
                justify-content: center;
                margin-right: 16px;
                width: 24px;
            }
        }
    }
`;

export const Copyright = styled.div`
    border-top: 1px solid ${Colors.greywhite};
    text-align: center;
    padding: 10px;
    padding-bottom: 50px;
`;

export default BgFooter;
