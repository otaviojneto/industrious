import styled from 'styled-components';
import Colors from '../../styles/colors';

const Nav = styled.nav`
    align-items: center;
    background-color: ${Colors.black};
    display: flex;
    height: 50px;
    justify-content: space-between;
    left: 0;
    padding: 12px 32px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;

    .brand {
        color: ${Colors.white};
        font-size: 15px;
        font-weight: 600;
        line-height: 48px;
    }
`;

export const Btn = styled.button`
    align-items: center;
    background-color: transparent;
    color: ${Colors.white};
    cursor: pointer;
    display: flex;
    font-size: 16px;
    opacity: 0.5;
    transition: 0.15s ease-in-out;

    svg {
        margin-right: 4px;
    }

    &:hover {
        opacity: 1;
    }
`;

export const Menu = styled.div`
    background-color: ${Colors.black};
    height: 100vh;
    position: fixed;
    right: -300px;
    top: 0;
    transition: 0.5s ease-in-out;
    width: 300px;

    .box-close {
        height: 50px;
        padding: 0 32px;
        display: flex;
        justify-content: flex-end;
    }

    .list {
        padding: 0 32px;

        .item {
            padding: 20px 0;
            border-bottom: 1px solid ${Colors.white};

            &:last-of-type {
                border-bottom: 0;
            }

            .link {
                color: ${Colors.white};
                cursor: pointer;
                display: block;
                opacity: 0.5;
                transition: 0.15s ease-in-out;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }

    &.active {
        right: 0;
    }
`;

export default Nav;
