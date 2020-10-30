import React, { Component } from 'react';
import Text from '../../components/Text';
import Colors from '../../styles/colors';
import BgGeneric, { TxtGeneric } from './style';

export default class Page extends Component {
    state = {
        txt: [
            {
                title: 'FEUGIAT CONSEQUAT',
                description:
                    'Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Magna et cursus lorem faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor sit amet dolor feugiat consequat.   Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Magna et cursus lorem faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor sit amet dolor feugiat consequat.',
            },
        ],
    };

    render() {
        return (
            <div>
                <>
                    <BgGeneric>
                        <Text
                            weight={300}
                            size={44}
                            lineHeight={53}
                            color={Colors.white}
                            align={'center'}
                            pt={46}
                        >
                            GENERIC PAGE
                        </Text>
                    </BgGeneric>
                    {this.state.txt.map((item, index) => {
                        {
                            item.title;
                        }
                        {
                            item.description;
                        }
                    })}
                    <div key={index} className="container">
                        <TxtGeneric>
                            <Text>{this.props.title}</Text>
                            <Text>{this.props.description}</Text>
                        </TxtGeneric>
                    </div>
                </>
            </div>
        );
    }
}
