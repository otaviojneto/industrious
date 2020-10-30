import React, { Component } from 'react';
import BgFooter, { List, Copyright } from './style';
import Text from '../../components/Text';
import Colors from '../../styles/colors';
import { FaTwitter, FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';

export default class Footer extends Component {
    state = {
        posts: [
            {
                name: 'Dolor pulvinar sed etiam.',
                link: '#!',
            },
            {
                name: 'Etiam vel lorem sed amet.',
                link: '#!',
            },
            {
                name: 'Felis enim feugiat viverra.',
                link: '#!',
            },
            {
                name: 'Dolor pulvinar magna etiam.',
                link: '#!',
            },
        ],

        midia: [
            {
                name: 'Twitter',
                link: '#!',
            },
            {
                name: 'Facebook',
                link: '#!',
            },
            {
                name: 'Github',
                link: '#!',
            },
            {
                name: 'Instagram',
                link: '#!',
            },
        ],
    };

    render() {
        return (
            <BgFooter>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Text
                                color={Colors.white}
                                lineHeight={28}
                                mb={34}
                                pt={100}
                                size={18}
                                weight={300}
                            >
                                ACCUMSAN MONTES VIVERRA
                            </Text>
                            <Text
                                color={Colors.greywhite}
                                lineHeight={24}
                                pr={36}
                                size={15}
                                weight={400}
                            >
                                Nunc lacinia ante nunc ac lobortis. Interdum
                                adipiscing gravida odio porttitor sem non mi
                                integer non faucibus ornare mi ut ante amet
                                placerat aliquet. Volutpat eu sed ante lacinia
                                sapien lorem accumsan varius montes viverra nibh
                                in adipiscing. Lorem ipsum dolor vestibulum ante
                                ipsum primis in faucibus vestibulum. Blandit
                                adipiscing eu felis iaculis volutpat ac
                                adipiscing sed feugiat eu faucibus. Integer ac
                                sed amet praesent. Nunc lacinia ante nunc ac
                                gravida.m
                            </Text>
                        </div>
                        <div className="col-3">
                            <Text
                                weight={300}
                                size={15}
                                lineHeight={22}
                                color={Colors.white}
                                pt={106}
                            >
                                SEM TURPIS AMET SEMPER
                            </Text>

                            <List border>
                                {this.state.posts.map((item, index) => (
                                    <li key={index} className="item">
                                        <a className="link" href={item.link}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </List>
                        </div>
                        <div className="col-3">
                            <Text
                                weight={300}
                                size={15}
                                lineHeight={22}
                                color={Colors.white}
                                pt={106}
                            >
                                MAGNA SED IPSUM
                            </Text>

                            <List>
                                {this.state.midia.map((item, index) => {
                                    let icon = '';

                                    switch (item.name) {
                                        case 'Twitter':
                                            icon = <FaTwitter />;
                                            break;
                                        case 'Facebook':
                                            icon = <FaFacebookF />;
                                            break;
                                        case 'Github':
                                            icon = <FaGithub />;
                                            break;
                                        case 'Instagram':
                                            icon = <FaInstagram />;
                                            break;

                                        default:
                                            break;
                                    }
                                    return (
                                        <li key={index} className="item">
                                            <a
                                                className="link"
                                                href={item.name}
                                                title={item.name}
                                            >
                                                <div className="icon">
                                                    {icon}
                                                </div>
                                                {item.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </List>
                        </div>
                    </div>

                    <Copyright>
                        © Untitled. Photos Unsplash, Video Coverr.
                    </Copyright>
                </div>
            </BgFooter>
        );
    }
}
