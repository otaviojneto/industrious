import React, { Component } from 'react';
import Text from '../../components/Text';
import Colors from '../../styles/colors';
import Design from './style';

export default class Information extends Component {
    render() {
        return (
            <Design>
                <div className="container">
                    <Text
                        weight={300}
                        size={33}
                        lineHeight={43}
                        color={Colors.white}
                        align={'center'}
                        mb={24}
                        uppercase
                    >
                        {this.props.title}
                    </Text>

                    <Text
                        weigh={400}
                        size={14}
                        lineHeight={24}
                        color={Colors.greywhite}
                        align={'center'}
                    >
                        {this.props.description}
                    </Text>
                </div>
            </Design>
        );
    }
}
