import React, { Component } from 'react';
import Text from '../../components/Text';
import Colors from '../../styles/colors';
import DivHero from './style';

export default class Hero extends Component {
    render() {
        return (
            <DivHero height={this.props.height}>
                <div className="box">
                    <Text
                        weight={200}
                        size={59}
                        lineHeight={70}
                        color={Colors.white}
                        mb={22}
                    >
                        {this.props.title}
                    </Text>

                    {this.props.description && (
                        <Text
                            weight={400}
                            size={22}
                            lineHeight={36}
                            color={Colors.greywhite}
                        >
                            {this.props.description}
                        </Text>
                    )}
                </div>
            </DivHero>
        );
    }
}
