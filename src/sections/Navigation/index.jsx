import React, { Component } from 'react';
import Nav, { Btn, Menu } from './styles';
import { BsList, BsX } from 'react-icons/bs';

export default class Navigation extends Component {
    state = {
        menuList: [
            {
                name: 'Home',
                link: '/',
            },
            {
                name: 'Generic',
                link: '/generic',
            },
            {
                name: 'Elements',
                link: '/elements',
            },
        ],

        showMenu: false,
    };

    render() {
        return (
            <Nav>
                <a href="/" className="brand">
                    Industrious
                </a>

                <Btn onClick={() => this.handleMenu()}>
                    <BsList size={20} />
                    Menu
                </Btn>

                <Menu className={this.state.showMenu && 'active'}>
                    <div className="box-close">
                        <Btn onClick={() => this.handleMenu()}>
                            <BsX size={20} />
                        </Btn>
                    </div>

                    <ul className="list">
                        {this.state.menuList.map((menu, index) => (
                            <li className="item">
                                <a href={menu.link} className="link">
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Menu>
            </Nav>
        );
    }

    handleMenu() {
        this.setState({ showMenu: !this.state.showMenu });
    }
}
