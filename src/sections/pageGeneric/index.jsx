import React, { Component } from 'react';
import Text from '../../components/Text';
import Colors from '../../styles/colors';
import BgGeneric, { Content, TxtGeneric } from './style';

export default class Page extends Component {
    state = {
        txt: [
            {
                title: 'FEUGIAT CONSEQUAT',
                description:
                    'Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Magna et cursus lorem faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor sit amet dolor feugiat consequat.',
            },
            {
                title: 'MAGNA ODIO TEMPUS COMMODO',
                description:
                    'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan ac praesent.',
            },
        ],
    };

    render() {
        return (
            <>
                <BgGeneric>
                    <Text
                        align={'center'}
                        color={Colors.white}
                        lineHeight={53}
                        pt={46}
                        size={44}
                        weight={300}
                    >
                        GENERIC PAGE
                    </Text>
                </BgGeneric>
                <Content className="container">
                    {this.state.txt.map((item, index) => (
                        <TxtGeneric>
                            <Text
                                color={Colors.grey}
                                lineHeight={43}
                                mb={24}
                                pt={40}
                                size={33}
                                weight={300}
                            >
                                {item.title}
                            </Text>
                            <Text
                                mb={24}
                                weight={400}
                                size={15}
                                lineHeight={24}
                            >
                                {item.description}
                            </Text>
                            <Text
                                mb={24}
                                weight={400}
                                size={15}
                                lineHeight={24}
                                pb={50}
                            >
                                {item.description}
                            </Text>
                        </TxtGeneric>
                    ))}
                </Content>
            </>
        );
    }
}
